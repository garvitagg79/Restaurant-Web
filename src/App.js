import { Layout, Image, Button, Card } from "antd";
import SideMenu from "./components/SideMenu";
import AppRoutes from "./components/AppRoutes";
import { Amplify } from "aws-amplify";
import { Auth } from "aws-amplify";
import config from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import { View, Text } from "@aws-amplify/ui-react";
import { useTheme } from "@aws-amplify/ui-react";
import { Heading } from "@aws-amplify/ui-react";

Amplify.configure(config);

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View
        textAlign="center"
        padding={tokens.space.large}
        paddingTop="40px"
        paddingBottom="30px"
      >
        <Image
          alt="Amplify logo"
          src="https://docs.amplify.aws/assets/logo-dark.svg"
        />
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" paddingTop="130px">
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved
        </Text>
      </View>
    );
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: "Enter your email",
    },
  },
  signUp: {
    password: {
      label: "Password:",
      placeholder: "Enter your Password:",
      isRequired: false,
      order: 2,
    },
    confirm_password: {
      label: "Confirm Password:",
      order: 1,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: "Enter your Password:",
    },
  },
  forgotPassword: {
    username: {
      placeholder: "Enter your email:",
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: "Enter your Confirmation Code:",
      label: "New Label",
      isRequired: false,
    },
    confirm_password: {
      placeholder: "Enter your Password Please:",
    },
  },
  setupTotp: {
    QR: {
      totpIssuer: "test issuer",
      totpUsername: "amplify_qr_test_user",
    },
    confirmation_code: {
      label: "New Label",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: "New Label",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
};

export default function App() {
  const { Sider, Content, Footer } = Layout;
  return (
    <View style={{ textAlign: "center" }}>
      <Authenticator formFields={formFields} components={components}>
        {({ signOut, user }) => (
          <Layout>
            <Sider style={{ height: "100vh", backgroundColor: "white" }}>
              <Image
                src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg"
                preview={false}
              />
              <SideMenu />
            </Sider>
            <Layout>
              <Content>
                <AppRoutes />
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Uber Eats Restaurant Dashboard ©2023
              </Footer>
            </Layout>
          </Layout>
        )}
      </Authenticator>
    </View>
  );
}
