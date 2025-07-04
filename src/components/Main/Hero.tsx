"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import walletIcon from "@/assets/img/walletIcon.svg";
import rocketIcon from "@/assets/img/rocket.svg";
import PhoneIconHero from "@/assets/img/PhoneIconHero.svg";
import BackgroundPhoneIconHero from "@/assets/img/BackgroundPhoneIconHero.svg";
import BackgroundPhoneIconHero3 from "@/assets/img/BackgroundPhoneIconHero3.svg";
import BackgroundPhoneIconRect from "@/assets/img/BackgroundPhoneIconRect.svg";
import BackgroundPhoneIconHeroRect from "@/assets/img/BackgroundPhoneIconHeroRect.svg";
import DogTracesImage from "@/assets/img/DogTracesImage.svg";
import Ellipse2 from "@/assets/img/Ellipse 2.svg";
import Vector2 from "@/assets/img/Vector2.svg";

import classes from "./Hero.module.scss";
import { useAccount } from "wagmi";
import WalletConnection from "../WalletConnection/WalletConnection";
const Hero: React.FC = () => {
  const { t } = useTranslation("hero");

  const [isMobile, setIsMobile] = useState(false);
  const { address, isConnected } = useAccount();
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 992);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className={classes.hero}>
      <div className={classes.tracesWrapper}>
        <Image src={DogTracesImage} alt="" />
      </div>

      <div className={classes.content}>
        <h1 className={classes.title}>{t("title")}</h1>{" "}
        <p
          className={classes.subtitle}
          dangerouslySetInnerHTML={{ __html: t("subtitle") }}
        />
        <p className={classes.tagline}>{t("tagline")}</p>
        <div className={classes.ctaGroup}>
                   <WalletConnection />
          <Link href="https://dogwalker-1.gitbook.io/dogwalker-docs/">
            <button type="button" className={classes.ctaSecondary}>
              {t("ctaSecondary")}
            </button>
          </Link>
        </div>
      </div>

      <div className={classes.images}>
        <Image
          src={BackgroundPhoneIconHero}
          alt=""
          aria-hidden="true"
          className={classes.bg1}
          width={isMobile ? 180 : undefined}
          height={isMobile ? 180 : undefined}
        />
        <Image
          src={BackgroundPhoneIconHero3}
          alt=""
          aria-hidden="true"
          className={classes.bg2}
          width={isMobile ? 180 : undefined}
          height={isMobile ? 180 : undefined}
        />

        <div className={classes.blurCenter} aria-hidden="true"></div>

        <Image
          src={BackgroundPhoneIconHeroRect}
          alt=""
          aria-hidden="true"
          className={classes.dashed}
          width={isMobile ? 50 : undefined}
          height={isMobile ? 50 : undefined}
        />
        <Image
          src={BackgroundPhoneIconRect}
          alt=""
          aria-hidden="true"
          className={classes.dotted}
          width={isMobile ? 150 : undefined}
          height={isMobile ? 150 : undefined}
        />

        <Image
          src={Ellipse2}
          alt=""
          aria-hidden="true"
          className={classes.circle}
          width={isMobile ? 300 : 700}
          height={isMobile ? 300 : 700}
        />
        <Image
          src={Vector2}
          alt=""
          aria-hidden="true"
          className={classes.vector}
          width={isMobile ? 125 : 215}
          height={isMobile ? 125 : 215}
        />
        <div className={classes.phoneTop}>
          <Image
            src={PhoneIconHero}
            alt={t("alt.phoneMockup")}
            width={isMobile ? 400 : 700}
            height={isMobile ? 400 : 700}
          />
        </div>

        <Image
          src={rocketIcon}
          alt={t("alt.rocket")}
          className={classes.rocket}
          width={isMobile ? 24 : undefined}
          height={isMobile ? 24 : undefined}
        />

        <button className={classes.dogWalkerBtn}>
          {t("button.dogWalker")}
        </button>
        <button className={classes.tokenBadge}>{t("button.tokenBadge")}</button>
      </div>
    </section>
  );
};

export default Hero;
