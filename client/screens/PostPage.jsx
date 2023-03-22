import { View , Text, SafeAreaView, ScrollView} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import PostPageContainer from "../components/PostPageContainer";

const PostPage = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <ScrollView>   
                <PostPageContainer/>
            </ScrollView>
        </SafeAreaView>
    );
    }

export default PostPage;