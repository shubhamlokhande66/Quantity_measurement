class LengthConvertor {
  calculate(LENGTHTYPES ,LENGTHFROM, LENGTHTO) {
      if (LENGTHTYPES == null || LENGTHFROM == null || LENGTHTO == null) {
          return null;
      }
      let inches =0;
      switch (LENGTHTO) {
          case 1:
              this.inches = LENGTHTYPES * LENGTHFROM;
              return this.inches / 39370;

          case 2:
              this.inches = LENGTHTYPES * LENGTHFROM;
              return this.inches / 39;
          case 3:
              this.inches = LENGTHTYPES * LENGTHFROM;
              return this.inches * 2.54;
          case 4:
              this.inches = LENGTHTYPES * LENGTHFROM;
              return this.inches * 25.4;
          case 5:
              this.inches= LENGTHTYPES * LENGTHFROM;
              return this.inches * 25400;
          case 6:
             this.inches = LENGTHTYPES * LENGTHFROM;
              return this.inches / 63360;
          case 7:
              this.inches = LENGTHTYPES * LENGTHFROM;
              return this.inches / 12;
          default:
          return null;
      }
  }
}
export default LengthConvertor;