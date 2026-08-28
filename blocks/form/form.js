function createField(label, type, required) {
  const field = document.createElement('div');
  field.className = 'form-field';

  const input = document.createElement('input');
  input.type = type;
  input.id = label.toLowerCase().replaceAll(' ', '-');
  input.name = input.id;
  input.required = required;

  const labelElement = document.createElement('label');
  labelElement.htmlFor = input.id;
  labelElement.textContent = label;

  field.append(labelElement, input);
  return field;
}

export default function decorate(block) {
  const form = document.createElement('form');
  form.className = 'form-fields';

  [
    ['First name', 'text', true],
    ['Last name', 'text', true],
    ['Email', 'email', true],
    ['Phone', 'tel', false],
  ].forEach(([label, type, required]) => {
    form.append(createField(label, type, required));
  });

  const submit = document.createElement('button');
  submit.type = 'submit';
  submit.textContent = 'Submit';
  form.append(submit);

  block.replaceChildren(form);
}
