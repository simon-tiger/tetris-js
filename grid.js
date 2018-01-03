class Grid {
  constructor(w, h) {
    this.grid = [];
    while (h--) {
      this.grid.push(new Array(w).fill(0));
    }
  }

  getPosition(x, y) {
    return this.grid[y][x];
  }

  setPosition(x, y, val) {
    this.grid[y][x] = val;
  }

  sweep(callback, boolean) {
    let counter = 0;
    for (let y = this.grid.length-1; y >= 0; y--) {
      const arr = this.grid[y];
      
      let full = true;
      arr.forEach((val, x) => {
        if (val === 0) {
          full = false;
        }
      });

      if (full) {
        const row = this.grid.splice(y, 1)[0].fill(0);
        this.grid.unshift(row);
        counter++;
      }
    }
    callback(counter, boolean);
  }
}