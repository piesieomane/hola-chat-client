import { faker } from '@faker-js/faker';
import {
  NoteBlank,
  UserSquare,
  ChartBar,
  ChatCircleText,
  Gear,
  Phone,
  BellRinging,
  SignOut,
  User,
  Users,
} from 'phosphor-react';

const Nav_Buttons = [
  {
    index: 0,
    icon: <NoteBlank />,
    name: 'Resume',
  },
  {
    index: 1,
    icon: <UserSquare />,
    name: 'Contacts',
  },
  {
    index: 2,
    icon: <ChartBar />,
    name: 'Statistic',
  },
  {
    index: 3,
    icon: <ChatCircleText />,
    name: 'Chats',
  },
  {
    index: 4,
    icon: <Gear />,
    name: 'Settings',
  },
];

const Nav_Settings = [
  {
    index: 5,
    icon: <Phone />,
  },
  {
    index: 6,
    icon: <BellRinging />,
  },
];

export { Nav_Buttons, Nav_Settings };
