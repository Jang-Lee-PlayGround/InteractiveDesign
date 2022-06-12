import sessionStore from "@hooks/sessionStore";

sessionStore.set("test", 1);
console.log(sessionStore.get("test"));
console.log(sessionStore.length());

sessionStore.set("test2", "test");
console.log(sessionStore.get("test2"));
console.log(sessionStore.length());
console.log(sessionStore.remove("test2"));
console.log(sessionStore.length());
