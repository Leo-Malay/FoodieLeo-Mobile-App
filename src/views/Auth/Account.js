import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View, Text, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// Helper Component
import {ScreenHeader} from '../../components/Header';
import {Button} from '../../components/Button';
// Style
import General from '../../Style/General';
import Auth from '../../Style/Auth';
import {Black, Red, Yellow} from '../../Style/color';
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
    <View>
      <ScreenHeader navigation={navigation} props={{name: 'Account'}} />
      <View>
        <Text style={General.PageHead}>Account</Text>
        <Text style={General.PageSubHead}>Welcome {fname + ' ' + lname}</Text>
        <TextInput
          style={Auth.Input}
          placeholder="First Name"
          value={fname}
          onChangeText={text => setFName(text)}
          editable={false}
        />
        <TextInput
          style={Auth.Input}
          placeholder="Last Name"
          value={lname}
          onChangeText={text => setLName(text)}
          editable={false}
        />
        <TextInput
          style={Auth.Input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          editable={false}
        />
        <TextInput
          style={Auth.Input}
          placeholder="Address Line 1"
          value={al1}
          onChangeText={text => setAl1(text)}
          editable={isEditable}
        />
        <TextInput
          style={Auth.Input}
          placeholder="Address Line 2"
          value={al2}
          onChangeText={text => setAl2(text)}
          editable={isEditable}
        />
        <TextInput
          style={Auth.Input}
          placeholder="City"
          value={city}
          onChangeText={text => setCity(text)}
          editable={isEditable}
        />
        <TextInput
          style={Auth.Input}
          placeholder="State"
          value={state}
          onChangeText={text => setState(text)}
          editable={isEditable}
        />
        <TextInput
          style={Auth.Input}
          placeholder="Country"
          value={country}
          onChangeText={text => setCountry(text)}
          editable={isEditable}
        />
        <TextInput
          style={Auth.Input}
          placeholder="Country"
          value={pincode}
          onChangeText={text => setPincode(text)}
          editable={isEditable}
        />

        <View
          style={{
            paddingTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
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
        <Text style={{fontSize: 10, paddingLeft: 20, color: Red}}>
          ***Somethings may take some time as server is frequently under
          development. Feel free to contact me at malaybhavsar.290@gmail.com***
        </Text>
      </View>
    </View>
  );
};
export default Account;
