import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Section from '../components/Section';
// Helper Component
import {HomeHeader} from '../components/Header';
import Menu from '../data/Menu';
// Style
import style from '../Style/style';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {list: []};
    this.GetMenu();
  }
  GetMenu = async () => {
    var menu_ls = await Menu();
    this.setState({list: menu_ls});
  };
  render() {
    const list = [
      ['Burger', 'BUR'],
      ['Pizza', 'PIZ'],
      ['Beverage', 'BEV'],
    ];
    const HomeStyle = StyleSheet.create({
      container: {backgroundColor: '#e6e6e6'},
    });
    return (
      <View style={[style.Container, HomeStyle.container]}>
        <ScrollView>
          <HomeHeader
            navigation={this.props.navigation}
            props={{
              name: 'FoodieLeo',
            }}
          />
          {list.map((ele, i) => {
            return (
              <Section
                key={i}
                props={{
                  title: ele[0],
                  type: ele[1],
                  Menu: this.state.list,
                }}
                navigation={this.props.navigation}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

export default Home;
