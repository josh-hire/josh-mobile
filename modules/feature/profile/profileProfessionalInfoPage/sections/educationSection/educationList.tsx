import { View } from "react-native";
import styles from "@modules/feature/profile/profileProfessionalInfoPage/sections/educationSection/educationSection.styles";
import ProfilePhoto from "@components/atoms/chat/profile";
import { Assets } from "@constants/Assets";
import EducationCard from "@components/molecules/card/EducationCard";

interface Education {
  id: string;
  educationLevel: string;
  institute: string;
  category: string;
  startDate: string;
  endDate?: string;
}

interface EducationGroup {
  institute: string;
  jobs: Education[];
}

interface EducationListProps {
  educationData: Education[];
}

const groupEducationByInstitution = (jobs: Education[]): EducationGroup[] => {
  const grouped: Record<string, Education[]> = {};

  jobs.forEach((job) => {
    if (!grouped[job.institute]) {
      grouped[job.institute] = [];
    }
    grouped[job.institute].push(job);
  });

  return Object.keys(grouped).map((institute) => ({
    institute,
    jobs: grouped[institute],
  }));
};

export default function EducationList({ educationData }: Readonly<EducationListProps>) {
  const groupedEducation = groupEducationByInstitution(educationData);
  return (
    <>
      {groupedEducation.map((group) => (
        <View key={group.institute} style={styles.educationBox}>
          <ProfilePhoto url={Assets.images.telkomselLogo} size={48} />
          <View>
            {group.jobs.map((job, index) => {
              return (
                <EducationCard
                  key={job.id}
                  educationData={job}
                  isLast={index === group.jobs.length - 1}
                />
              );
            })}
          </View>
        </View>
      ))}
    </>
  );
}
