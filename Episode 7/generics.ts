function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

const [st1getter, st1setter] = simpleState(10);
console.log(st1getter());
st1setter(62);
console.log(st1getter());

//Overridding Inferred Generic Types
const [st2getter, st2setter] = simpleState<string | null>(null);
console.log(st2getter());
st2setter("str");
console.log(st2getter());
