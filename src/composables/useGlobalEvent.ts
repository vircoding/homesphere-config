import mitt from 'mitt';

type GlobalEvent = {
  'layout:end': void;
};

const emitter = mitt<GlobalEvent>();

export default function () {
  return {
    emitter: emitter.emit,
    listener: emitter.on,
  };
}
