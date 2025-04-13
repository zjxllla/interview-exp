// 算法一：任务调度（并发控制）​
// 问题描述：
// 实现一个任务调度器，接收若干异步任务，控制同时执行的任务数不超过 n 个。

class TaskQueue {
  constructor(max) {
    this.tasks = []; //异步任务队列
    this.max = max; //最大并发数
    this.running = 0;
  }

  addTask(task) {
    return new Promise((resolve, reject) => {
      const runTask = () => {
        this.running++;
        task()
          .then(resolve)
          .catch(reject)
          .finally(() => {
            this.running--;
            this.nextTask();
          });
      };
      if (this.running < this.max) {
        runTask();
      } else {
        this.tasks.push(runTask);
      }
    });
  }

  nextTask() {
    if (this.tasks.length !== 0) {
      this.tasks.shift()();
    }
  }
}

const taskQueue = new TaskQueue(2);

function asyncTask(name, delay) {
  return () =>
    new Promise((resolve) => {
      console.log(`任务 ${name} 开始`);
      setTimeout(() => {
        console.log(`任务 ${name} 完成`);
        resolve();
      }, delay);
    });
}
taskQueue.addTask(asyncTask("A", 1000));
taskQueue.addTask(asyncTask("B", 1500));
taskQueue.addTask(asyncTask("C", 500));
taskQueue.addTask(asyncTask("D", 2000));
taskQueue.addTask(asyncTask("E", 1000));
