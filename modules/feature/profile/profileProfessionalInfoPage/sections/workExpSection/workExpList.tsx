import WorkExperienceCard from "@components/molecules/card/workExperienceCard";
import { View } from "react-native";
import styles from "@modules/feature/profile/profileProfessionalInfoPage/sections/workExpSection/workExpSection.styles";
import ProfilePhoto from "@components/atoms/chat/profile";
import { Assets } from "@constants/Assets";

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

interface WorkExpGroup {
  company: string;
  jobs: WorkExpData[];
}

interface WorkExperienceListProps {
  workExpData: WorkExpData[];
}

const groupJobsByCompany = (jobs: WorkExpData[]): WorkExpGroup[] => {
  const grouped: Record<string, WorkExpData[]> = {};

  jobs.forEach((job) => {
    if (!grouped[job.company]) {
      grouped[job.company] = [];
    }
    grouped[job.company].push(job);
  });

  return Object.keys(grouped).map((company) => ({
    company,
    jobs: grouped[company],
  }));
};

export default function WorkExperienceList({
  workExpData,
}: Readonly<WorkExperienceListProps>) {
  const groupedJobs = groupJobsByCompany(workExpData);
  return (
    <>
      {groupedJobs.map((group) => (
        <View key={group.company} style={styles.companyBox}>
          <ProfilePhoto url={Assets.images.telkomselLogo} size={48} />
          <View>
            {group.jobs.map((job, index) => {
              return (
                <WorkExperienceCard
                  key={job.id}
                  workExpData={job}
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
