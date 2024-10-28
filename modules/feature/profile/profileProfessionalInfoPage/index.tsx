import globalStyles from "@styles/global.styles";
import styles from "@modules/feature/profile/profileProfessionalInfoPage/profileProfessionalInfo.styles";
import ConfirmationModal from "@components/molecules/modal/ConfirmationModal";
import ProfilePhoto from "@components/atoms/chat/profile";
import { BackHandler, ScrollView, View } from "react-native";
import { Assets } from "@constants/Assets";
import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import { TextButton } from "@components/atoms/button/TextButton";
import SummarySection from "@modules/feature/profile/profileProfessionalInfoPage/sections/summarySection";
import WorkExperienceSection from "@modules/feature/profile/profileProfessionalInfoPage/sections/workExpSection";
import EducationSection from "@modules/feature/profile/profileProfessionalInfoPage/sections/educationSection";
import LicenseSection from "@modules/feature/profile/profileProfessionalInfoPage/sections/licenseSection";
import HonorSection from "@modules/feature/profile/profileProfessionalInfoPage/sections/honorSection";
import JobPrefSection from "@modules/feature/profile/profileProfessionalInfoPage/sections/jobPrefSection";
import SkillSection from "@modules/feature/profile/profileProfessionalInfoPage/sections/skillSection";

export default function ProfileProfessionalInfoPage() {
  const [isConfirmVisible, setIsConfirmVisible] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<string>("summary");

  useEffect(() => {
    const backAction = () => {
      setIsConfirmVisible(true);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const renderedSection = () => {
    if (currentSection === "summary") {
      return <SummarySection />;
    } else if (currentSection === "workexp") {
      return <WorkExperienceSection />;
    } else if (currentSection === "education") {
      return <EducationSection />;
    } else if (currentSection === "license") {
      return <LicenseSection />;
    } else if (currentSection === "honor") {
      return <HonorSection />;
    } else if (currentSection === "jobpref") {
      return <JobPrefSection />;
    } else if (currentSection === "skill") {
      return <SkillSection />;
    }
  };

  return (
    <View style={[[globalStyles.screen, styles.screenBackground]]}>
      <ProfilePhoto url={Assets.images.telkomselLogo} size={120} />
      <TextButton
        title="See my profile"
        isFocused={false}
        handler={() => {
          router.push("/(profile)/jobseeker/preview");
        }}
      />
      <ScrollView horizontal={true} style={styles.horizontalScroll}>
        <TextButton
          title="Summary"
          isFocused={currentSection === "summary"}
          handler={() => {
            setCurrentSection("summary");
          }}
        />
        <TextButton
          title="Work Experience"
          isFocused={currentSection === "workexp"}
          handler={() => {
            setCurrentSection("workexp");
          }}
        />
        <TextButton
          title="Education"
          isFocused={currentSection === "education"}
          handler={() => {
            setCurrentSection("education");
          }}
        />
        <TextButton
          title="Licenses & Certification"
          isFocused={currentSection === "license"}
          handler={() => {
            setCurrentSection("license");
          }}
        />
        <TextButton
          title="Skill"
          isFocused={currentSection === "skill"}
          handler={() => {
            setCurrentSection("skill");
          }}
        />
        <TextButton
          title="Honor & Awards"
          isFocused={currentSection === "honor"}
          handler={() => {
            setCurrentSection("honor");
          }}
        />
        <TextButton
          title="Job Preferences"
          isFocused={currentSection === "jobpref"}
          handler={() => {
            setCurrentSection("jobpref");
          }}
        />
      </ScrollView>
      {renderedSection()}

      <ConfirmationModal
        title="Cancel all edits?"
        description="everything you change will be saved"
        handleCloseModal={() => router.back()}
        isConfirmVisible={isConfirmVisible}
        setIsConfirmVisible={setIsConfirmVisible}
      />
    </View>
  );
}
