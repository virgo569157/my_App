
import * as React from 'react';
import {View, Text} from 'react-native';
import {Button, SearchBar} from '@ant-design/react-native';
import {Hello} from '../../components/Hello';

function HomeScreen({ navigation } :any) {
  return (
    <View>
      <SearchBar defaultValue="初始值" placeholder="搜索房源" />
      <Text>Home!</Text>
      <Button style={{width: 150}} type="primary" onPress={()=>navigation.navigate('Details')}>
        跳转至详情
      </Button>
      <Hello name="World" enthusiasmLevel={1} />
    </View>
  );
}

export default HomeScreen