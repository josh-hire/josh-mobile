import { ImageBackground, View } from "react-native";
import RegisterHeader from "@modules/feature/auth/registrations/registrationPage/RegisterHeader";
import RegisterFooter from "@modules/feature/auth/registrations/registrationPage/RegisterFooter";
import RegisterForm from "@components/molecules/form/RegisterForm";
import styles from "@styles/global.styles";
import registerStyles from "@modules/feature/auth/registrations/registrationPage/registration.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Assets } from "@constants/Assets";

export default function RegisterPage() {
  return (
    <ImageBackground source={Assets.images.bgMotif} style={registerStyles.background}>
      <SafeAreaView style={styles.screen}>
        <View style={styles.stepContainer}>
          <RegisterHeader />
          <RegisterForm />
        </View>
        <RegisterFooter />
      </SafeAreaView>
    </ImageBackground>
  );
}
