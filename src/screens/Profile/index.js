import React, {useState, useEffect} from 'react'
import {Image} from 'react-native';
import {Container, Spacer} from "../../components/layout";
import SimpleText from "../../components/SimpleText";
import {useStateValue} from "../../state";
import Button from "../../components/Button";
import {clearUser} from "../../state/User/actions";
import Ionicons from "react-native-vector-icons/Ionicons";
import theme from "../../components/theme";
import storage from "../../utils/storage";

const Profile = props => {
  const [{user}, dispatch] = useStateValue();
  const [logout, setLogout] = useState(null);

  useEffect(() => {
    if (!logout) return;

    storage.clear();

    props.navigation.navigate('Auth');
    dispatch(clearUser())
  }, [logout]);

  return (
    <Container dark center>
      <Image
        style={{width: 50, height: 50, backgroundColor: '#CCFFDD'}}
        source={{uri: user.avatar}}/>
      <SimpleText light>Hello, {user.name}</SimpleText>
      <Spacer space={20}/>
      <Button
        secondary
        title={'Logout'}
        onPress={() => setLogout(true)}
      />
    </Container>
  )
};

Profile.navigationOptions = ({navigation}) => ({
  tabBarIcon: ({tintColor}) => <Ionicons
    name={'md-person'}
    size={theme.navigation.iconSize}
    color={tintColor}
  />,
});

export default Profile
