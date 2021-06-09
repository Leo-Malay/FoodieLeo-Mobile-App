import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Section from '../components/Section';
// Helper Component
import {HomeHeader} from '../components/Header';
// Style
import style from '../Style/style';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.route.params !== undefined) {
      if (this.props.route.params.Func === 'ADD') {
        this.AddCart();
      }
    }
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
                navigation={this.props.navigation}
                props={{title: ele[0], type: ele[1]}}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

export default Home;
