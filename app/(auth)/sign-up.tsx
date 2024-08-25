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
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    const { firstname, lastname, email, password } = form;

    // if (
    //   firstname === "" ||
    //   lastname === "" ||
    //   email === "" ||
    //   password === ""
    // ) {
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
      router.replace("/sign-in");
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
            Sign Up for <Text className="text-[#4DB6AC]">MindFix</Text>
          </Text>

          <FormField
            title="First Name"
            value={form.firstname}
            placeholder="John"
            handleChangeText={(text: string) =>
              setForm({ ...form, firstname: text })
            }
            otherStyles="mt-7 font-pregular"
            keyboardType="text"
          />

          <FormField
            title="Last Name"
            value={form.lastname}
            placeholder="Doe"
            handleChangeText={(text: string) =>
              setForm({ ...form, lastname: text })
            }
            otherStyles="mt-7"
            keyboardType="default"
          />

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
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-black font-pregular">
              Already have an account?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-[#4DB6AC]"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
