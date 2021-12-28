import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// Helper Component
import {ScreenHeader} from '../../components/Header';
import {Button} from '../../components/Button';
// Style
import style from '../../Style/style';
import {Black, Red, Yellow} from '../../Style/color';
const Localstyle = StyleSheet.create({
  Container: {padding: 5},
  TextIn: {
    width: 350,
  },
  Btn: {alignItems: 'center', paddingBottom: 20},
  disclaimer: {fontSize: 12, color: Red},
});
// Request
import {Account as AccReq, updateAccount} from '../../redux/Actions/Auth';
const Account = ({navigation}) => {
  const {isAuthenticated, data, isLoading} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [al1, setAl1] = useState('');
  const [al2, setAl2] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');
  const [isEditable, setIsEditable] = useState(false);

  const saveHandler = () => {
    if (isEditable) {
      setIsEditable(false);
      dispatch(updateAccount(al1, al2, city, state, country, pincode));
    } else setIsEditable(true);
  };

  useEffect(() => {
    if (!isAuthenticated) navigation.navigate('Login');
    if (data?.fname === undefined) dispatch(AccReq());
    if (data?.fname) setFName(data?.fname);
    if (data?.lname) setLName(data?.lname);
    if (data?.email) setEmail(data?.email);
    if (data?.al1) setAl1(data?.al1);
    if (data?.al2) setAl2(data?.al2);
    if (data?.city) setCity(data?.city);
    if (data?.state) setState(data?.state);
    if (data?.country) setCountry(data?.country);
    if (data?.pincode) setPincode(data?.pincode);
  }, [data, dispatch]);
  return (
    <View style={style.Container}>
      <ScreenHeader navigation={navigation} props={{name: 'Account'}} />
      <View style={[Localstyle.Container, {alignItems: 'center'}]}>
        <Text style={[style.Text, style.Subtitle]}>
          Welcome {fname + ' ' + lname}, Here you will be able to edit your
          account info :)
        </Text>
        <TextInput
          style={[style.TextInput, Localstyle.TextIn]}
          placeholder="First Name"
          value={fname}
          onChangeText={text => setFName(text)}
          editable={false}
        />
        <TextInput
          style={[style.TextInput, Localstyle.TextIn]}
          placeholder="Last Name"
          value={lname}
          onChangeText={text => setLName(text)}
          editable={false}
        />
        <TextInput
          style={[style.TextInput, Localstyle.TextIn]}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          editable={false}
        />
        <TextInput
          style={[style.TextInput, Localstyle.TextIn]}
          placeholder="Address Line 1"
          value={al1}
          onChangeText={text => setAl1(text)}
          height={50}
          multiline={true}
          editable={isEditable}
        />
        <TextInput
          style={[style.TextInput, Localstyle.TextIn]}
          placeholder="Address Line 2"
          value={al2}
          onChangeText={text => setAl2(text)}
          height={50}
          multiline={true}
          editable={isEditable}
        />
        <TextInput
          style={[style.TextInput, Localstyle.TextIn]}
          placeholder="City"
          value={city}
          onChangeText={text => setCity(text)}
          editable={isEditable}
        />
        <TextInput
          style={[style.TextInput, Localstyle.TextIn]}
          placeholder="State"
          value={state}
          onChangeText={text => setState(text)}
          editable={isEditable}
        />
        <TextInput
          style={[style.TextInput, Localstyle.TextIn]}
          placeholder="Country"
          value={country}
          onChangeText={text => setCountry(text)}
          editable={isEditable}
        />
        <TextInput
          style={[style.TextInput, Localstyle.TextIn]}
          placeholder="Country"
          value={pincode}
          onChangeText={text => setPincode(text)}
          editable={isEditable}
        />

        <View>
          <Button
            props={{
              text: isLoading ? (
                <ActivityIndicator size="small" color="#0000ff" />
              ) : isEditable ? (
                'Save'
              ) : (
                'Edit'
              ),
              width: 300,
              bgcolor: Yellow,
              color: Black,
              onPress: saveHandler,
            }}
          />
        </View>
        <Text style={[style.Text, Localstyle.disclaimer, style.Center]}>
          ***Somethings may take some time as server is frequently under
          development. Feel free to contact me at malaybhavsar.290@gmail.com***
        </Text>
      </View>
    </View>
  );
};
export default Account;
