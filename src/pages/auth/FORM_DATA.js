export const SIGN_IN_FORM_DATA = {
  name: 'SIGN_IN_FORM',
  title: 'У меня уже есть аккаунт',
  text: 'Войти с помощью почты и пароля',
  formFields: [
    {
      label: 'Почта',
      type: 'email',
      name: 'email',
      id: 'sign-in-email',
      required: true,
    },
    {
      label: 'Пароль',
      type: 'password',
      name: 'password',
      id: 'sign-in-password',
      required: true,
    },
  ],
  defaultFormFields: {
    email: '',
    password: '',
  },
  btns: [
    { title: 'Войти', type: 'submit', btnVariant: 'primary' },
    {
      title: 'Войти с помощью Google',
      type: 'button',
      btnVariant: 'secondary',
    },
  ],
};

export const SIGN_UP_FORM_DATA = {
  name: 'SIGN_UP_FORM',
  title: 'У меня нет аккаунта',
  text: 'Зарегистрироваться с использование почты',
  formFields: [
    {
      label: 'Логин',
      type: 'text',
      name: 'login',
      id: 'sign-up-login',
      required: true,
    },
    {
      label: 'Почта',
      type: 'email',
      name: 'email',
      id: 'sign-up-email',
      required: true,
    },
    {
      label: 'Пароль',
      type: 'password',
      name: 'password',
      id: 'sign-up-password',
      required: true,
    },
    {
      label: 'Подтверждение пароля',
      type: 'password',
      name: 'confirmPassword',
      id: 'sign-up-confirmPassword',
      required: true,
    },
  ],
  defaultFormFields: {
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
  btns: [{ title: 'Регистрация', type: 'submit', btnVariant: 'primary' }],
};

export const NAV_CATEGORIES = {
  SHOP: { title: 'Магазин', url: 'shop' },
  CONTACTS: { title: 'Контакты', url: 'contacts' },
  AUTH: { title: 'Вход', url: 'auth' },
  LOGOUT: { title: 'Выйти', url: 'auth' },
};

export const BUTTON_VARIANT_CLASSES = {
  default: '',
  inverted: 'btn--inverted',
  secondary: 'btn--secondary',
};
