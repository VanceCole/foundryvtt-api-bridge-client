export const config = [
  {
    name: 'server',
    data: {
      name: 'Server',
      hint: 'The remote socket server to connect to',
      scope: 'world',
      config: true,
      type: String,
      default: '',
    },
  },
  {
    name: 'auto',
    data: {
      name: 'Automatically connect on startup',
      hint: '',
      scope: 'world',
      config: true,
      type: Boolean,
      default: false,
    },
  },
];
