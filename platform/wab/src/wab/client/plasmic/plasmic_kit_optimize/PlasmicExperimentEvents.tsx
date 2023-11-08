// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gtUDvxG6cmBbSzqLikNzoP
// Component: SRI244k7gOA
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import Button from "../../components/widgets/Button"; // plasmic-import: SEF-sRmSoqV5c/component
import ExpandButton from "../../components/widgets/ExpandButton"; // plasmic-import: JJhv0MV9DH/component
import ExperimentEvent from "../../components/splits/ExperimentEvent"; // plasmic-import: fjdDZovo7S/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_plasmic_kit_optimize.module.css"; // plasmic-import: gtUDvxG6cmBbSzqLikNzoP/projectcss
import sty from "./PlasmicExperimentEvents.module.css"; // plasmic-import: SRI244k7gOA/css

import PlussvgIcon from "../q_4_icons/icons/PlasmicIcon__Plussvg"; // plasmic-import: sQKgd2GNr/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon

export type PlasmicExperimentEvents__VariantMembers = {
  isExpanded: "isExpanded";
};

export type PlasmicExperimentEvents__VariantsArgs = {
  isExpanded?: SingleBooleanChoiceArg<"isExpanded">;
};

type VariantPropType = keyof PlasmicExperimentEvents__VariantsArgs;
export const PlasmicExperimentEvents__VariantProps = new Array<VariantPropType>(
  "isExpanded"
);

export type PlasmicExperimentEvents__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicExperimentEvents__ArgsType;
export const PlasmicExperimentEvents__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicExperimentEvents__OverridesType = {
  root?: p.Flex<"div">;
  newBtn?: p.Flex<typeof Button>;
  expandBtn?: p.Flex<typeof ExpandButton>;
  events?: p.Flex<"div">;
};

export interface DefaultExperimentEventsProps {
  children?: React.ReactNode;
  isExpanded?: SingleBooleanChoiceArg<"isExpanded">;
  className?: string;
}

export const defaultExperimentEvents__Args: Partial<PlasmicExperimentEvents__ArgsType> =
  {};

function PlasmicExperimentEvents__RenderFunc(props: {
  variants: PlasmicExperimentEvents__VariantsArgs;
  args: PlasmicExperimentEvents__ArgsType;
  overrides: PlasmicExperimentEvents__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultExperimentEvents__Args, props.args);
  const $props = args;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__mr1Lo)}>
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox___2U9MO)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__khaXh
              )}
            >
              {"Conversion events"}
            </div>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__gYoK3)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__s10UO
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ textDecorationLine: "underline" }}
                    >
                      {"Docs"}
                    </span>
                    <React.Fragment>{" ->"}</React.Fragment>
                  </React.Fragment>
                </div>
              </div>
            ) : null}
          </div>
        ) : null}

        <Button
          data-plasmic-name={"newBtn"}
          data-plasmic-override={overrides.newBtn}
          className={classNames("__wab_instance", sty.newBtn)}
          endIcon={
            <ChevronDownsvgIcon
              className={classNames(projectcss.all, sty.svg__e7FrS)}
              role={"img"}
            />
          }
          size={"small" as const}
          startIcon={
            <PlussvgIcon
              className={classNames(projectcss.all, sty.svg___0BG0B)}
              role={"img"}
            />
          }
          type={"clear" as const}
          withIcons={"startIcon" as const}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__sWmXu
            )}
          >
            {"New"}
          </div>
        </Button>

        <ExpandButton
          data-plasmic-name={"expandBtn"}
          data-plasmic-override={overrides.expandBtn}
          className={classNames("__wab_instance", sty.expandBtn, {
            [sty.expandBtnisExpanded]: hasVariant(
              variants,
              "isExpanded",
              "isExpanded"
            ),
          })}
          isExpanded={
            hasVariant(variants, "isExpanded", "isExpanded") ? true : undefined
          }
        />
      </div>

      {(hasVariant(variants, "isExpanded", "isExpanded") ? true : true) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"events"}
          data-plasmic-override={overrides.events}
          hasGap={true}
          className={classNames(projectcss.all, sty.events, {
            [sty.eventsisExpanded]: hasVariant(
              variants,
              "isExpanded",
              "isExpanded"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <ExperimentEvent
                  className={classNames(
                    "__wab_instance",
                    sty.experimentEvent__f6HAc
                  )}
                />

                <ExperimentEvent
                  className={classNames(
                    "__wab_instance",
                    sty.experimentEvent___851Ns
                  )}
                  withoutLabel={true}
                />
              </React.Fragment>
            ),

            value: args.children,
          })}
        </p.Stack>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "newBtn", "expandBtn", "events"],
  newBtn: ["newBtn"],
  expandBtn: ["expandBtn"],
  events: ["events"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  newBtn: typeof Button;
  expandBtn: typeof ExpandButton;
  events: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicExperimentEvents__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicExperimentEvents__VariantsArgs;
    args?: PlasmicExperimentEvents__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicExperimentEvents__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicExperimentEvents__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicExperimentEvents__ArgProps,
      internalVariantPropNames: PlasmicExperimentEvents__VariantProps,
    });

    return PlasmicExperimentEvents__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicExperimentEvents";
  } else {
    func.displayName = `PlasmicExperimentEvents.${nodeName}`;
  }
  return func;
}

export const PlasmicExperimentEvents = Object.assign(
  // Top-level PlasmicExperimentEvents renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    newBtn: makeNodeComponent("newBtn"),
    expandBtn: makeNodeComponent("expandBtn"),
    events: makeNodeComponent("events"),

    // Metadata about props expected for PlasmicExperimentEvents
    internalVariantProps: PlasmicExperimentEvents__VariantProps,
    internalArgProps: PlasmicExperimentEvents__ArgProps,
  }
);

export default PlasmicExperimentEvents;
/* prettier-ignore-end */