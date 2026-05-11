'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useVideoZoom = (
  containerSelector: string,
  videoSelector: string,
) => {
  useGSAP(() => {
    const containers = document.querySelectorAll(containerSelector);

    containers.forEach((container) => {
      const video = container.querySelector(videoSelector);
      const wrapper = container.querySelector('.video-wrapper'); // 固定したい枠

      if (!video || !wrapper) return;

      gsap.to(video, {
        scale: 2,
        ease: 'none',
        scrollTrigger: {
          trigger: container, // セクション全体をトリガーに
          start: 'top top', // コンテナの上が画面の一番上に重なったら開始
          end: '+=150', // 1000px分スクロールする間、固定を維持（ここで長さを調節）
          scrub: true, // スクロールに同期
          pin: true, // ★重要：アニメーションが終わるまで固定する
          anticipatePin: 1, // ピン留め時のガタつきを防止
        },
      });
    });
  });
};
