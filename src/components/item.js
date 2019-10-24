function Item(text, assigned, date) {
  this.text = text;
  this.id = Math.random();
  this.complete = false;
  this.assigned = assigned;
  this.dueDate = date;
  this.showModal = false;
}

Item.prototype.toggle = function() {
  this.complete = ! this.complete;
};

export default Item; 