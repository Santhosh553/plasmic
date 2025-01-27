// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.

import {
  DefaultMultiAssetsActionsProps,
  PlasmicMultiAssetsActions,
} from "@/wab/client/plasmic/plasmic_kit_left_pane/PlasmicMultiAssetsActions";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import * as React from "react";

export interface MultiAssetsActionsProps
  extends DefaultMultiAssetsActionsProps {
  type: "asset" | "token";
  onDelete: (selected: string[]) => Promise<boolean>;
}

const MultiAssetsActionsContext = React.createContext<{
  isSelecting: boolean;
  selectedAssets: string[];
  onAssetSelected: (assetId: string, selected: boolean) => void;
  isAssetSelected: (assetId: string) => boolean;
} | null>(null);

export function useMultiAssetsActions() {
  const context = React.useContext(MultiAssetsActionsContext);
  if (!context) {
    throw new Error(
      "useMultiAssetsActions must be used within a MultiAssetsActions"
    );
  }
  return context;
}

function getLabelForNumSelected(
  type: MultiAssetsActionsProps["type"],
  numSelected: number
) {
  const singular = type === "asset" ? "asset" : "token";
  const plural = type === "asset" ? "assets" : "tokens";
  if (numSelected === 0) {
    return `Select ${plural}`;
  }
  if (numSelected === 1) {
    return `1 ${singular} selected`;
  }
  return `${numSelected} ${plural} selected`;
}

function MultiAssetsActions_(
  props: MultiAssetsActionsProps,
  ref: HTMLElementRefOf<"div">
) {
  const { type, children, onDelete, ...rest } = props;

  const [isSelecting, setIsSelecting] = React.useState(false);
  const [selectedAssets, setSelectedAssets] = React.useState<string[]>([]);

  const onAssetSelected = React.useCallback(
    (assetId: string, selected: boolean) => {
      setIsSelecting(true);
      setSelectedAssets((prev) =>
        selected
          ? [...prev, assetId]
          : prev.filter((selectedAssetId) => selectedAssetId !== assetId)
      );
    },
    []
  );

  const isAssetSelected = React.useCallback(
    (assetId: string) => selectedAssets.includes(assetId),
    [selectedAssets]
  );

  return (
    <PlasmicMultiAssetsActions
      root={{ ref }}
      withoutControlBar={!isSelecting}
      numSelected={getLabelForNumSelected(type, selectedAssets.length)}
      cancel={{
        onClick: () => {
          setIsSelecting(false);
          setSelectedAssets([]);
        },
      }}
      deleteSelected={{
        onClick: async () => {
          if (await onDelete(selectedAssets)) {
            setIsSelecting(false);
            setSelectedAssets([]);
          }
        },
      }}
      {...rest}
    >
      <MultiAssetsActionsContext.Provider
        value={{
          isSelecting,
          selectedAssets,
          onAssetSelected,
          isAssetSelected,
        }}
      >
        {children}
      </MultiAssetsActionsContext.Provider>
    </PlasmicMultiAssetsActions>
  );
}
const MultiAssetsActions = React.forwardRef(MultiAssetsActions_);
export default MultiAssetsActions;
