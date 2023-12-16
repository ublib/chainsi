export const t = (v: string) => new ChainsiImpl(v);

class ChainsiImpl {
  constructor(private __: string) {}

  get _() {
    return this.__;
  }

  get bold() {
    this.__ = `\x1b[1m${this._}\x1b[0m`;
    return this;
  }

  get underline() {
    this.__ = `\x1b[4m${this._}\x1b[0m`;
    return this;
  }

  get strikethrough() {
    this.__ = `\x1b[9m${this._}\x1b[0m`;
    return this;
  }

  get hidden() {
    this.__ = `\x1b[8m${this._}\x1b[0m`;
    return this;
  }

  get italic() {
    this.__ = `\x1b[3m${this._}\x1b[0m`;
    return this;
  }

  get dim() {
    this.__ = `\x1b[2m${this._}\x1b[0m`;
    return this;
  }

  get red() {
    this.__ = `\x1b[31m${this._}\x1b[0m`;
    return this;
  }

  get blue() {
    this.__ = `\x1b[34m${this._}\x1b[0m`;
    return this;
  }

  get green() {
    this.__ = `\x1b[32m${this._}\x1b[0m`;
    return this;
  }

  get yellow() {
    this.__ = `\x1b[33m${this._}\x1b[0m`;
    return this;
  }

  get magenta() {
    this.__ = `\x1b[35m${this._}\x1b[0m`;
    return this;
  }

  get cyan() {
    this.__ = `\x1b[36m${this._}\x1b[0m`;
    return this;
  }

  get white() {
    this.__ = `\x1b[37m${this._}\x1b[0m`;
    return this;
  }

  get grey() {
    this.__ = `\x1b[90m${this._}\x1b[0m`;
    return this;
  }

  get black() {
    this.__ = `\x1b[30m${this._}\x1b[0m`;
    return this;
  }

  get bgRed() {
    this.__ = `\x1b[41m${this._}\x1b[0m`;
    return this;
  }

  get bgBlue() {
    this.__ = `\x1b[44m${this._}\x1b[0m`;
    return this;
  }

  get bgGreen() {
    this.__ = `\x1b[42m${this._}\x1b[0m`;
    return this;
  }

  get bgYellow() {
    this.__ = `\x1b[43m${this._}\x1b[0m`;
    return this;
  }

  get bgMagenta() {
    this.__ = `\x1b[45m${this._}\x1b[0m`;
    return this;
  }

  get bgCyan() {
    this.__ = `\x1b[46m${this._}\x1b[0m`;
    return this;
  }

  get bgWhite() {
    this.__ = `\x1b[47m${this._}\x1b[0m`;
    return this;
  }

  get bgGray() {
    this.__ = `\x1b[100m${this._}\x1b[0m`;
    return this;
  }

  get bgGrey() {
    this.__ = `\x1b[100m${this._}\x1b[0m`;
    return this;
  }

  get bgBlack() {
    this.__ = `\x1b[40m${this._}\x1b[0m`;
    return this;
  }
}
