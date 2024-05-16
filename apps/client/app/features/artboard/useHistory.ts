import { useCallback, useRef, useState } from "react";

interface History<Entry> {
  redoList: Entry[];
  undoList: Entry[];
}
const createInitialHistory = <Entry>(): History<Entry> => ({
  redoList: [],
  undoList: [],
});

export function useHistory<Entry extends {}>() {
  const history = useRef<History<Entry>>(createInitialHistory());

  const [canRedo, setCanRedo] = useState(false);
  const [canUndo, setCanUndo] = useState(false);

  const clearHistory = useCallback(() => {
    history.current = createInitialHistory();
    setCanRedo(false);
    setCanUndo(false);
  }, []);

  const pushHistory = useCallback((data: Entry) => {
    history.current.undoList.push(data);
    history.current.redoList = [];
    setCanUndo(true);
    setCanRedo(false);
  }, []);

  const undoHistory = useCallback((currentData: Entry) => {
    if (history.current.undoList.length === 0) return null;

    const last = history.current.undoList.pop();
    if (last === undefined) return null;

    history.current.redoList.push(currentData);

    setCanRedo(true);
    setCanUndo(history.current.undoList.length > 0);

    return last;
  }, []);

  const redoHistory = useCallback((currentData: Entry) => {
    if (history.current.redoList.length === 0) return;

    const last = history.current.redoList.pop();
    if (last === undefined) return;

    history.current.undoList.push(currentData);

    setCanRedo(history.current.redoList.length > 0);
    setCanUndo(true);

    return last;
  }, []);

  return {
    canRedo,
    canUndo,
    clearHistory,
    pushHistory,
    undoHistory,
    redoHistory,
  };
}
