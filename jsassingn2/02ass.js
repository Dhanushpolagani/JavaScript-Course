const processObjectsDelayed = (items, delay) => {
    items.forEach(item => {
        setTimeout(() => item.process(), delay);
    });
};

const items = [
  { name: "Alpha", 
    process: function() {
        console.log(`Processing: ${this.name}`);
    }
  },
  { name: "Beta", 
    process: function() {
        console.log(`Task for ${this.name} done.`);
    }
  }
];

processObjectsDelayed(items, 1000);
