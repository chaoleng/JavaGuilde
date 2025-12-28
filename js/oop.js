// 初始化语言切换器
const languageSwitcher = new LanguageSwitcher();

function runOOPDemo() {
    const output = document.getElementById('output');
    const translations = {
        'zh': '=== 运行OOP演示 ===\n\n【多态演示】\nAnimal dog = new Dog("小狗");\ndog.eat(); // 输出: 小狗 is eating dog food\ndog.sleep(); // 输出: 小狗 is sleeping\n\nAnimal cat = new Cat("小猫");\ncat.eat(); // 输出: 小猫 is eating cat food\ncat.sleep(); // 输出: 小猫 is sleeping\n\n【封装演示】\nPerson person = new Person("太郎", 25);\nperson.getName(); // OK: public getter\n// person.age; // 错误: private field\nperson.setAge(30); // OK: public setter\n\n✅ 演示完成！\nOOP原则提高了代码的可重用性和可维护性。',
        'ja': '=== OOPデモ実行 ===\n\n【ポリモーフィズムのデモ】\nAnimal dog = new Dog("ポチ");\ndog.eat(); // 出力: ポチ is eating dog food\ndog.sleep(); // 出力: ポチ is sleeping\n\nAnimal cat = new Cat("タマ");\ncat.eat(); // 出力: タマ is eating cat food\ncat.sleep(); // 出力: タマ is sleeping\n\n【カプセル化のデモ】\nPerson person = new Person("太郎", 25);\nperson.getName(); // OK: public getter\n// person.age; // エラー: private field\nperson.setAge(30); // OK: public setter\n\n✅ デモ完了！\nOOPの原則により、コードの再利用性と保守性が向上します。',
        'en': '=== Running OOP Demo ===\n\n【Polymorphism Demo】\nAnimal dog = new Dog("Buddy");\ndog.eat(); // Output: Buddy is eating dog food\ndog.sleep(); // Output: Buddy is sleeping\n\nAnimal cat = new Cat("Kitty");\ncat.eat(); // Output: Kitty is eating cat food\ncat.sleep(); // Output: Kitty is sleeping\n\n【Encapsulation Demo】\nPerson person = new Person("Taro", 25);\nperson.getName(); // OK: public getter\n// person.age; // Error: private field\nperson.setAge(30); // OK: public setter\n\n✅ Demo Complete!\nOOP principles improve code reusability and maintainability.'
    };

    const currentLang = localStorage.getItem('preferredLanguage') || 'zh';
    output.textContent = translations[currentLang];
}

function clearOutput() {
    const outputPlaceholder = window.langSwitcher?.translations?.[window.langSwitcher?.currentLang]?.outputPlaceholder || '出力結果がここに表示されます...';
    document.getElementById('output').innerHTML = `<span data-i18n="outputPlaceholder">${outputPlaceholder}</span>`;
}
