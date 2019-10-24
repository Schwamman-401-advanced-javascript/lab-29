function Item(text, id, completed) {
  this.text = text;
  this.id = Math.random();
  this.complete = false;
}

Item.prototype.toggle = function() {
  this.complete = ! this.complete;
};

export default Item; 