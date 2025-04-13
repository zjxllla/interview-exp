class myQueue {
  constructor() {
    this.stackIn = [];
    this.stackOut = [];
  }

  myPush(fun) {
    // 入队
    this.stackIn.push(fun);
  }
  myPop() {
    if (this.stackOut.length === 0) {
      // 如果队内元素不为空，则将全部其放在出队的栈
      while (this.stackIn.length > 0) {
        this.stackOut.push(this.stackIn.pop());
      }
    }
    //出队  （先入先出）
    return this.stackOut.pop();
  }
}
