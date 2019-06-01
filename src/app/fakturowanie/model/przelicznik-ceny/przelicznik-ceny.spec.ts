import { PrzelicznikCeny, ZadanieObliczenia, NotEnoughParamsError, CenaPozycji } from './przelicznik-ceny';
import { Podatek } from './../item';


describe('allow oblicz pricing based on input', () => {
    it('oblicz brutto based on nett + podatek', () => {
      const calc = new PrzelicznikCeny();
      const zadanieObliczenia: ZadanieObliczenia = {
        netto: 100,
        brutto: null,
        podatek: 0.23
      };

      const res = calc.oblicz(zadanieObliczenia);
      expect(res.netto).toBe(100.00);
      expect(res.brutto).toBe(123.00);
      expect(res.wartoscPodatku).toBe(23.00);
      expect(res.podatek).toBe(Podatek.podat_23);
    });

    it('oblicz nett based on brutto', () => {
      const calc = new PrzelicznikCeny();
      const zadanieObliczenia: ZadanieObliczenia = {
        netto: null,
        brutto: 123,
        podatek: Podatek.podat_23
      };

      const res = calc.oblicz(zadanieObliczenia);
      expect(res.netto).toBe(100.00);
      expect(res.brutto).toBe(123.00);
      expect(res.wartoscPodatku).toBe(23.00);
      expect(res.podatek).toBe(Podatek.podat_23);
    });

    it('more fancy example nett based on brutto', () => {
      const calc = new PrzelicznikCeny();
      const zadanieObliczenia = {
        netto: null,
        brutto: 100,
        podatek: 0.23
      };

      const res = calc.oblicz(zadanieObliczenia);
      expect(res.netto).toBe(81.30);
      expect(res.brutto).toBe(100);
      expect(res.wartoscPodatku).toBe(18.70);
      expect(res.podatek).toBe(0.23);
    });

    it('and one more', () => {
      const calc = new PrzelicznikCeny();
      const zadanieObliczenia = {
        netto: null,
        brutto: 777.00,
        podatek: 0.08
      };

      const res = calc.oblicz(zadanieObliczenia);
      expect(res.netto).toBe(719.44);
      expect(res.brutto).toBe(777.00);
      expect(res.wartoscPodatku).toBe(57.56);
      expect(res.podatek).toBe(0.08);
    });

    it('raise error when no netto nor brutto', () => {
      const calc = new PrzelicznikCeny();
      const zadanieObliczenia = {
        netto: null,
        brutto: null,
        podatek: 0.08
      };

      expect(() => calc.oblicz(zadanieObliczenia)).toThrow(new NotEnoughParamsError('not enough parameters'));
    });
});
