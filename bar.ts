import baz from './baz.json' assert { type: 'json' };

const Foo = {
	generate: () => baz
}

export { Foo };