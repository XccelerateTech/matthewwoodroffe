const starwars = require('../starwars');

describe('Spying on starwars duel', function() {

    let shadowObiwan = new starwars.Jedi('shadowObiwan',100,300);
    let shadowAnakin = new starwars.Sith('shadowAnakin',100,300);

    it("ShadowObiwan attacks shadowAnakin", function() {
        spyOn(shadowObiwan, 'attack');
        starwars.duel(shadowObiwan, shadowAnakin);
        expect(shadowObiwan.attack).toHaveBeenCalled();
    });
    it("shadowAnakin attacks ShadowObiwan", function() {
        spyOn(shadowAnakin, 'attack');
        starwars.duel(shadowAnakin, shadowObiwan);
        expect(shadowAnakin.attack).toHaveBeenCalled();
    });
    it("shadowAnakin gets injured", function() {
        spyOn(shadowAnakin, 'injure');
        starwars.duel(shadowAnakin, shadowObiwan);
        expect(shadowAnakin.injure).toHaveBeenCalled();
    });
});