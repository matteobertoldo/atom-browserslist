'use babel';

describe('Language Browserslist', () => {
  let grammar = null;

  beforeEach(() => {
    waitsForPromise(() => atom.packages.activatePackage('atom-browserslist'));
    runs(() => (grammar = atom.grammars.grammarForScopeName('source.sql.browserslist')));
  });

  describe('when Atom run language process', () => {
    it('parses the browserslist grammar', () => {
      expect(grammar).toBeTruthy();
      return expect(grammar.scopeName).toBe('source.sql.browserslist');
    });
  });
});
