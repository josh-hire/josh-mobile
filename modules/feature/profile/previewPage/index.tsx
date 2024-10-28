import ProfilePhoto from "@components/atoms/chat/profile";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { Assets } from "@constants/Assets";
import { ScrollView, View } from "react-native";
import styles from "@modules/feature/profile/previewPage/profilePreview.styles";
import WorkExperienceList from "../profileProfessionalInfoPage/sections/workExpSection/workExpList";
import EducationList from "../profileProfessionalInfoPage/sections/educationSection/educationList";
import LicenseList from "../profileProfessionalInfoPage/sections/licenseSection/licenseList";
import SkillList from "../profileProfessionalInfoPage/sections/skillSection/skillList";
import HonorList from "../profileProfessionalInfoPage/sections/honorSection/honorList";

interface WorkExpData {
  id: string;
  position: string;
  company: string;
  type: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
}

interface Education {
  id: string;
  educationLevel: string;
  institute: string;
  category: string;
  startDate: string;
  endDate?: string;
}
interface License {
  id: string;
  title: string;
  organization: string;
  startDate: string;
  endDate?: string;
  description: string;
}
interface Honor {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
}

export default function ProfilePreviewPage() {
  const jobData: WorkExpData[] = [
    {
      id: "1",
      position: "Data Science",
      company: "Telkomsel",
      type: "Full Time",
      location: "south Jakarta",
      startDate: "April 2021",
      endDate: "present",
      description:
        "Analysis: design, perform, and disseminate descriptive or diagnostic analyses with valuable insights.",
    },
    {
      id: "2",
      position: "Data Science",
      company: "Telkomsel",
      type: "Internship",
      location: "Bandung, West Java",
      startDate: "October 2020",
      endDate: "April 2021",
      description:
        "Analysis: design, perform, and disseminate descriptive or diagnostic analyses with valuable insights.",
    },
    {
      id: "3",
      position: "Data Master",
      company: "Astra International TBK",
      type: "Full Time",
      location: "south Jakarta",
      startDate: "April 2021",
      endDate: "present",
      description:
        "Analysis: design, perform, and disseminate descriptive or diagnostic analyses with valuable insights.",
    },
  ];
  const educationData: Education[] = [
    {
      id: "1",
      educationLevel: "S1",
      institute: "Telkom University",
      category: "Informatics Engineering",
      startDate: "April 2021",
    },
    {
      id: "2",
      educationLevel: "S1",
      institute: "Telkom University",
      category: "Medical Engineering",
      startDate: "April 2021",
    },
  ];
  const licenseData: License[] = [
    {
      id: "1",
      title: "Python for Data Scientist",
      organization: "Udemy",
      description:
        "Analysis: design, perform, and disseminate descriptive or diagnostic analyses with valuable",
      startDate: "April 2021",
      endDate: "April 2022",
    },
    {
      id: "1",
      title: "Python for Data Scientist",
      organization: "Microsoft",
      description:
        "Analysis: design, perform, and disseminate descriptive or diagnostic analyses with valuable",
      startDate: "April 2021",
    },
  ];
  const skillData: string[] = ["Communication", "Team Work", "Responsible"];
  const honorData: Honor[] = [
    {
      id: "1",
      title: "1st Winner Gemastik 2024",
      organization: "Kementrian Pendidikan dan Kebudayaan",
      description:
        "Analysis: design, perform, and disseminate descriptive or diagnostic analyses with valuable",
      date: "April 2021",
    },
    {
      id: "2",
      title: "2nd Winner Gemastik 2022",
      organization: "Kementrian Pendidikan dan Kebudayaan",
      description:
        "Analysis: design, perform, and disseminate descriptive or diagnostic analyses with valuable",
      date: "April 2021",
    },
  ];

  return (
    <ScrollView style={[styles.screenBackground]}>
      <View style={styles.profileContainer}>
        <ProfilePhoto size={64} url={Assets.images.telkomselLogo} />
        <View>
          <HeadingText type="h2" fontWeight="bold" color="white">
            Afgansyah Putra
          </HeadingText>
          <HeadingText type="h6" color="white">
            Afgan@gmail.com
          </HeadingText>
        </View>
      </View>
      <View>
        <HeadingText
          style={styles.subtitleText}
          type="h4"
          color="white"
          fontWeight="bold"
          textAlign="left"
        >
          About
        </HeadingText>
        <View style={styles.summaryContainer}>
          <HeadingText type="h6" color="white">
            With a strong background in financial administration
          </HeadingText>
        </View>
      </View>
      <View>
        <HeadingText
          style={styles.subtitleText}
          type="h4"
          color="white"
          fontWeight="bold"
          textAlign="left"
        >
          Work Experience
        </HeadingText>
        <WorkExperienceList workExpData={jobData} />
      </View>
      <View>
        <HeadingText
          style={styles.subtitleText}
          type="h4"
          color="white"
          fontWeight="bold"
          textAlign="left"
        >
          Education
        </HeadingText>
        <EducationList educationData={educationData} />
      </View>
      <View>
        <HeadingText
          style={styles.subtitleText}
          type="h4"
          color="white"
          fontWeight="bold"
          textAlign="left"
        >
          Licenses & Certification
        </HeadingText>
        <LicenseList licenseData={licenseData} />
      </View>
      <View>
        <HeadingText
          style={styles.subtitleText}
          type="h4"
          color="white"
          fontWeight="bold"
          textAlign="left"
        >
          Skill
        </HeadingText>
        <SkillList skillData={skillData} />
      </View>
      <View>
        <HeadingText
          style={styles.subtitleText}
          type="h4"
          color="white"
          fontWeight="bold"
          textAlign="left"
        >
          Honor & Awards
        </HeadingText>
        <HonorList honorData={honorData} />
      </View>
    </ScrollView>
  );
}
