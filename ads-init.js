/**
 * AdMob integration for Kelime Kartları
 * Replace YOUR_BANNER_AD_ID and YOUR_INTERSTITIAL_AD_ID with your real AdMob IDs
 * Test IDs: ca-app-pub-3940256099942544/6300978111 (banner), ca-app-pub-3940256099942544/1033173712 (interstitial)
 */
import { Capacitor } from '@capacitor/core';
import { AdMob, BannerAdPosition, BannerAdSize } from '@capacitor-community/admob';

// ═══ НАСТРОЙКА: ID из AdMob Console ═══
const BANNER_AD_ID = 'ca-app-pub-4869538689485009/5399444839';
const INTERSTITIAL_AD_ID = 'ca-app-pub-3940256099942544/1033173712';  // TODO: создайте межстраничную и замените
const IS_TESTING = true;  // true при разработке; false при публикации в App Store

let interstitialReady = false;
let quizSessionCount = 0;
const INTERSTITIAL_EVERY_N_SESSIONS = 3;  // Показывать межстраничную рекламу каждые N сессий

export async function initAds() {
  if (typeof Capacitor === 'undefined' || !Capacitor.isNativePlatform()) {
    return;  // Не в нативном приложении — реклама не показывается
  }
  try {
    await AdMob.initialize();
    await showBanner();
    await prepareInterstitial();
  } catch (e) {
    console.warn('AdMob init:', e);
  }
}

async function showBanner() {
  try {
    await AdMob.showBanner({
      adId: BANNER_AD_ID,
      adSize: BannerAdSize.ADAPTIVE_BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
      isTesting: IS_TESTING
    });
  } catch (e) {
    console.warn('Banner error:', e);
  }
}

async function prepareInterstitial() {
  try {
    await AdMob.prepareInterstitial({
      adId: INTERSTITIAL_AD_ID,
      isTesting: IS_TESTING
    });
    interstitialReady = true;
  } catch (e) {
    console.warn('Interstitial prepare:', e);
  }
}

export async function maybeShowInterstitial() {
  if (!interstitialReady) return;
  quizSessionCount++;
  if (quizSessionCount % INTERSTITIAL_EVERY_N_SESSIONS !== 0) return;
  try {
    await AdMob.showInterstitial();
    interstitialReady = false;
    await prepareInterstitial();
  } catch (e) {
    console.warn('Interstitial show:', e);
  }
}

export function hideBanner() {
  if (typeof Capacitor === 'undefined' || !Capacitor.isNativePlatform()) return;
  AdMob.hideBanner().catch(() => {});
}
