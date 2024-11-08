// styles.tsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginHorizontal: 35,
    marginVertical: 12,
    borderRadius: 10,
    width: '95%',
    height: 60,
    backgroundColor: 'white'
  },
  colorBlock: {
    width: 50,
    height: 60,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  taskTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  addButton: {
    width: 40,
    fontSize: 24,
    fontWeight: 'bold',
  },
  disabledText: {
    color: '#B3B3B3',
    fontWeight: 'normal',
  },
  disabledButton: {
    color: '#B3B3B3',
  },
});

export default styles;
