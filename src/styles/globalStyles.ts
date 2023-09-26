import {StyleSheet} from 'react-native';
import Colors from './colorStyles';

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.9)', // Semi-transparent overlay
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  button: {
    padding: 12,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  longButton: {
    width: '100%',
  },
  roundedButton: {
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.light,
  },
  boldButtonText: {
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    padding: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.light,
    borderRadius: 5,
    backgroundColor: Colors.dark,
    color: Colors.light,
  },
  title: {
    fontSize: 36,
    marginBottom: 20,
    color: Colors.light,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mb60: {
    marginBottom: 60,
  },
  mb40: {
    marginBottom: 40,
  },
  mb20: {
    marginBottom: 20,
  },
  mb10: {
    marginBottom: 10,
  },
  mt20: {
    marginTop: 20,
  },
  mt10: {
    marginTop: 10,
  },
  links: {
    flexDirection: 'row',
    marginTop: 20,
  },
  spaceBetween: {
    width: '100%',
    justifyContent: 'space-between',
  },
  linkText: {
    fontSize: 16,
    color: Colors.primary,
    marginRight: 10,
  },
});
