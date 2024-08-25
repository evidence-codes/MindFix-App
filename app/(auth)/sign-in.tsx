import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";

// import { images } from "../../constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";

const SignUp = () => {
  //   const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    // const { email, password } = form;

    // if (email === "" || password === "") {
    //   Alert.alert("Error", "Please fill in all fields");
    //   return;
    // }

    setSubmitting(true);

    try {
      //   await signIn(email, password);
      //   const result = await getCurrentUser();
      //   setUser(result);
      //   setIsLogged(true);
      //   Alert.alert("Success", "User signed in successfully");
      router.replace("/home");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-[#FAF9F6] h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          {/* <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          /> */}

          <Text className="text-2xl font-semibold text-black mt-10 font-psemibold">
            Sign In to MindFix
          </Text>

          <FormField
            title="Email"
            value={form.email}
            placeholder="user@user.com"
            handleChangeText={(text: string) =>
              setForm({ ...form, email: text })
            }
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            placeholder="Password"
            handleChangeText={(text: string) =>
              setForm({ ...form, password: text })
            }
            otherStyles="mt-7"
            keyboardType="password"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-black font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-[#4DB6AC]"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
