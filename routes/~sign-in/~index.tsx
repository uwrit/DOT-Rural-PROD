//
// This source file is part of the Stanford Biodesign Digital Health ENGAGE-HF open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { SignInForm as AuthSignInForm } from "@stanfordspezi/spezi-web-design-system/modules/auth";
import { createFileRoute } from "@tanstack/react-router";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Helmet } from "react-helmet";
import { AsideEngageLayout } from "@/components/AsideEngageLayout";
import { env } from "@/env";
import { auth, authProvider } from "@/modules/firebase/app";
import uwLogoImg from "./W-Logo_Purple_RGB.png";

const SignIn = () => (
  <AsideEngageLayout>
    <Helmet>
      <title>Sign In</title>
    </Helmet>
    <AuthSignInForm
      className="mx-auto w-[350px]"
      providers={[
        {
          name: "University of Washington",
          provider: authProvider.uw,
          icon: (
            <img
              src={uwLogoImg}
              alt="University of Washington logo"
              className="w-[22px]"
            />
          ),
        },

      ]}
      enableEmailPassword={env.VITE_PUBLIC_EMAIL_PASSWORD_SIGN_IN}
      auth={auth}
      buttonSize="lg"
      signInWithPopup={signInWithPopup}
      signInWithEmailAndPassword={signInWithEmailAndPassword}
    />
  </AsideEngageLayout>
);

export const Route = createFileRoute("/sign-in/")({
  component: SignIn,
});
