let data = {

  users:
    [
      { id: 1, name: 'Алексей К.' },
      { id: 2, name: 'Иван И.' },
      { id: 3, name: 'Андрей Ф.' },
      { id: 4, name: 'Александр Н.' },
      { id: 5, name: 'Елена Н.' },
      { id: 6, name: 'Дарья Г.' },
    ],
  messages:
    [
      { id: 1, name: 'Алексей К.', message: 'Привет, как дела?' },
      { id: 2, name: 'Елена Н.', message: 'У меня отлично, как твои дела?' },
      { id: 3, name: 'Алексей К.', message: 'У меня супер, сижу реакт учу. А ты чем занимаешься?' },
      { id: 4, name: 'Елена Н.', message: 'Я буду смотреть Острых Козырьков! Удачи в реакте, пока!' },
      { id: 5, name: 'Алексей К.', message: 'Приятного просмотра! Пока!' },
    ],
  links:
    [
      { path: "/profile", menu: "Профиль" },
      { path: "/dialogs", menu: "Сообщения" },
      { path: "/news", menu: "Новости" },
      { path: "/music", menu: "Музыка" },
      { path: "/settings", menu: "Настройки" },
      { path: "/friends", menu: "Друзья" }
    ],

};

export default data;