import {expect, test} from 'vitest'
import { TimeTracker } from './time_tracker.js'

test('do nothing', () => {
  expect(1 + 2).toBe(3);
})

test('time tracker state', () => {
  const timeTracker = new TimeTracker();
  expect(timeTracker.getState()).toBe('stopped');
  timeTracker.start();
  expect(timeTracker.getState()).toBe('running');
})
