import { Image } from "react-native";

export default function Header() {
    return (
        <Image
            style={{ width: 400, height: 200 }}
            source={require("../assets/terrameedu.png")}
        />
    );
}
  