/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ComAtprotoLabelDefsLabelValueDefinitionStrings,
  ComAtprotoLabelDefsLabelValueDefinitionStrings$inboundSchema,
  ComAtprotoLabelDefsLabelValueDefinitionStrings$Outbound,
  ComAtprotoLabelDefsLabelValueDefinitionStrings$outboundSchema,
} from "./comatprotolabeldefslabelvaluedefinitionstrings.js";

/**
 * How should a client visually convey this label? 'inform' means neutral and informational; 'alert' means negative and warning; 'none' means show nothing.
 */
export const Severity = {
  Inform: "inform",
  Alert: "alert",
  None: "none",
} as const;
/**
 * How should a client visually convey this label? 'inform' means neutral and informational; 'alert' means negative and warning; 'none' means show nothing.
 */
export type Severity = ClosedEnum<typeof Severity>;

/**
 * What should this label hide in the UI, if applied? 'content' hides all of the target; 'media' hides the images/video/audio; 'none' hides nothing.
 */
export const Blurs = {
  Content: "content",
  Media: "media",
  None: "none",
} as const;
/**
 * What should this label hide in the UI, if applied? 'content' hides all of the target; 'media' hides the images/video/audio; 'none' hides nothing.
 */
export type Blurs = ClosedEnum<typeof Blurs>;

/**
 * The default setting for this label.
 */
export const DefaultSetting = {
  Ignore: "ignore",
  Warn: "warn",
  Hide: "hide",
} as const;
/**
 * The default setting for this label.
 */
export type DefaultSetting = ClosedEnum<typeof DefaultSetting>;

/**
 * Declares a label value and its expected interpretations and behaviors.
 */
export type ComAtprotoLabelDefsLabelValueDefinition = {
  /**
   * The value of the label being defined. Must only include lowercase ascii and the '-' character ([a-z-]+).
   */
  identifier: string;
  /**
   * How should a client visually convey this label? 'inform' means neutral and informational; 'alert' means negative and warning; 'none' means show nothing.
   */
  severity: Severity;
  /**
   * What should this label hide in the UI, if applied? 'content' hides all of the target; 'media' hides the images/video/audio; 'none' hides nothing.
   */
  blurs: Blurs;
  /**
   * The default setting for this label.
   */
  defaultSetting?: DefaultSetting | undefined;
  /**
   * Does the user need to have adult content enabled in order to configure this label?
   */
  adultOnly?: boolean | undefined;
  locales: Array<ComAtprotoLabelDefsLabelValueDefinitionStrings>;
};

/** @internal */
export const Severity$inboundSchema: z.ZodNativeEnum<typeof Severity> = z
  .nativeEnum(Severity);

/** @internal */
export const Severity$outboundSchema: z.ZodNativeEnum<typeof Severity> =
  Severity$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Severity$ {
  /** @deprecated use `Severity$inboundSchema` instead. */
  export const inboundSchema = Severity$inboundSchema;
  /** @deprecated use `Severity$outboundSchema` instead. */
  export const outboundSchema = Severity$outboundSchema;
}

/** @internal */
export const Blurs$inboundSchema: z.ZodNativeEnum<typeof Blurs> = z.nativeEnum(
  Blurs,
);

/** @internal */
export const Blurs$outboundSchema: z.ZodNativeEnum<typeof Blurs> =
  Blurs$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Blurs$ {
  /** @deprecated use `Blurs$inboundSchema` instead. */
  export const inboundSchema = Blurs$inboundSchema;
  /** @deprecated use `Blurs$outboundSchema` instead. */
  export const outboundSchema = Blurs$outboundSchema;
}

/** @internal */
export const DefaultSetting$inboundSchema: z.ZodNativeEnum<
  typeof DefaultSetting
> = z.nativeEnum(DefaultSetting);

/** @internal */
export const DefaultSetting$outboundSchema: z.ZodNativeEnum<
  typeof DefaultSetting
> = DefaultSetting$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DefaultSetting$ {
  /** @deprecated use `DefaultSetting$inboundSchema` instead. */
  export const inboundSchema = DefaultSetting$inboundSchema;
  /** @deprecated use `DefaultSetting$outboundSchema` instead. */
  export const outboundSchema = DefaultSetting$outboundSchema;
}

/** @internal */
export const ComAtprotoLabelDefsLabelValueDefinition$inboundSchema: z.ZodType<
  ComAtprotoLabelDefsLabelValueDefinition,
  z.ZodTypeDef,
  unknown
> = z.object({
  identifier: z.string(),
  severity: Severity$inboundSchema,
  blurs: Blurs$inboundSchema,
  defaultSetting: DefaultSetting$inboundSchema.default("warn"),
  adultOnly: z.boolean().optional(),
  locales: z.array(
    ComAtprotoLabelDefsLabelValueDefinitionStrings$inboundSchema,
  ),
});

/** @internal */
export type ComAtprotoLabelDefsLabelValueDefinition$Outbound = {
  identifier: string;
  severity: string;
  blurs: string;
  defaultSetting: string;
  adultOnly?: boolean | undefined;
  locales: Array<ComAtprotoLabelDefsLabelValueDefinitionStrings$Outbound>;
};

/** @internal */
export const ComAtprotoLabelDefsLabelValueDefinition$outboundSchema: z.ZodType<
  ComAtprotoLabelDefsLabelValueDefinition$Outbound,
  z.ZodTypeDef,
  ComAtprotoLabelDefsLabelValueDefinition
> = z.object({
  identifier: z.string(),
  severity: Severity$outboundSchema,
  blurs: Blurs$outboundSchema,
  defaultSetting: DefaultSetting$outboundSchema.default("warn"),
  adultOnly: z.boolean().optional(),
  locales: z.array(
    ComAtprotoLabelDefsLabelValueDefinitionStrings$outboundSchema,
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComAtprotoLabelDefsLabelValueDefinition$ {
  /** @deprecated use `ComAtprotoLabelDefsLabelValueDefinition$inboundSchema` instead. */
  export const inboundSchema =
    ComAtprotoLabelDefsLabelValueDefinition$inboundSchema;
  /** @deprecated use `ComAtprotoLabelDefsLabelValueDefinition$outboundSchema` instead. */
  export const outboundSchema =
    ComAtprotoLabelDefsLabelValueDefinition$outboundSchema;
  /** @deprecated use `ComAtprotoLabelDefsLabelValueDefinition$Outbound` instead. */
  export type Outbound = ComAtprotoLabelDefsLabelValueDefinition$Outbound;
}

export function comAtprotoLabelDefsLabelValueDefinitionToJSON(
  comAtprotoLabelDefsLabelValueDefinition:
    ComAtprotoLabelDefsLabelValueDefinition,
): string {
  return JSON.stringify(
    ComAtprotoLabelDefsLabelValueDefinition$outboundSchema.parse(
      comAtprotoLabelDefsLabelValueDefinition,
    ),
  );
}

export function comAtprotoLabelDefsLabelValueDefinitionFromJSON(
  jsonString: string,
): SafeParseResult<
  ComAtprotoLabelDefsLabelValueDefinition,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ComAtprotoLabelDefsLabelValueDefinition$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ComAtprotoLabelDefsLabelValueDefinition' from JSON`,
  );
}
