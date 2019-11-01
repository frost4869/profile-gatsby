import { colors } from "../../theme";

export default {
  headerBar: {
    backgroundColor: colors.primary,
    paddingLeft: '5vw',
    paddingRight: '5vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuItem: {
    marginLeft: '3vw',
    fontSize: 16,
    fontWeight: '700',
    cursor: 'pointer'
  },
  avatar: {
    width: 50,
    height: 50,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 25,
    marginRight: 16,
  },
  menuItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer'
  },
  username: {
    fontWeight: '700'
  },
  clickable: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}