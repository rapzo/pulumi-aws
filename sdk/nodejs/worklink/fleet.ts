// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../types";
import * as utilities from "../utilities";

/**
 * ## Example Usage
 *
 * Basic usage:
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.worklink.Fleet("example", {});
 * ```
 *
 * Network Configuration Usage:
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.worklink.Fleet("example", {network: {
 *     vpcId: aws_vpc.test.id,
 *     subnetIds: [aws_subnet.test.map(__item => __item.id)],
 *     securityGroupIds: [aws_security_group.test.id],
 * }});
 * ```
 *
 * Identity Provider Configuration Usage:
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * import * from "fs";
 *
 * const test = new aws.worklink.Fleet("test", {identityProvider: {
 *     type: "SAML",
 *     samlMetadata: fs.readFileSync("saml-metadata.xml"),
 * }});
 * ```
 *
 * ## Import
 *
 * WorkLink can be imported using the ARN, e.g.
 *
 * ```sh
 *  $ pulumi import aws:worklink/fleet:Fleet test arn:aws:worklink::123456789012:fleet/example
 * ```
 */
export class Fleet extends pulumi.CustomResource {
    /**
     * Get an existing Fleet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FleetState, opts?: pulumi.CustomResourceOptions): Fleet {
        return new Fleet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:worklink/fleet:Fleet';

    /**
     * Returns true if the given object is an instance of Fleet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Fleet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Fleet.__pulumiType;
    }

    /**
     * The ARN of the created WorkLink Fleet.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * The ARN of the Amazon Kinesis data stream that receives the audit events. Kinesis data stream name must begin with `"AmazonWorkLink-"`.
     */
    public readonly auditStreamArn!: pulumi.Output<string | undefined>;
    /**
     * The identifier used by users to sign in to the Amazon WorkLink app.
     */
    public /*out*/ readonly companyCode!: pulumi.Output<string>;
    /**
     * The time that the fleet was created.
     */
    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    /**
     * The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.
     */
    public readonly deviceCaCertificate!: pulumi.Output<string | undefined>;
    /**
     * The name of the fleet.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Provide this to allow manage the identity provider configuration for the fleet. Fields documented below.
     */
    public readonly identityProvider!: pulumi.Output<outputs.worklink.FleetIdentityProvider | undefined>;
    /**
     * The time that the fleet was last updated.
     */
    public /*out*/ readonly lastUpdatedTime!: pulumi.Output<string>;
    /**
     * A region-unique name for the AMI.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Provide this to allow manage the company network configuration for the fleet. Fields documented below.
     */
    public readonly network!: pulumi.Output<outputs.worklink.FleetNetwork | undefined>;
    /**
     * The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region. Defaults to `true`.
     */
    public readonly optimizeForEndUserLocation!: pulumi.Output<boolean | undefined>;

    /**
     * Create a Fleet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FleetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FleetArgs | FleetState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FleetState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["auditStreamArn"] = state ? state.auditStreamArn : undefined;
            inputs["companyCode"] = state ? state.companyCode : undefined;
            inputs["createdTime"] = state ? state.createdTime : undefined;
            inputs["deviceCaCertificate"] = state ? state.deviceCaCertificate : undefined;
            inputs["displayName"] = state ? state.displayName : undefined;
            inputs["identityProvider"] = state ? state.identityProvider : undefined;
            inputs["lastUpdatedTime"] = state ? state.lastUpdatedTime : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["network"] = state ? state.network : undefined;
            inputs["optimizeForEndUserLocation"] = state ? state.optimizeForEndUserLocation : undefined;
        } else {
            const args = argsOrState as FleetArgs | undefined;
            inputs["auditStreamArn"] = args ? args.auditStreamArn : undefined;
            inputs["deviceCaCertificate"] = args ? args.deviceCaCertificate : undefined;
            inputs["displayName"] = args ? args.displayName : undefined;
            inputs["identityProvider"] = args ? args.identityProvider : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["network"] = args ? args.network : undefined;
            inputs["optimizeForEndUserLocation"] = args ? args.optimizeForEndUserLocation : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["companyCode"] = undefined /*out*/;
            inputs["createdTime"] = undefined /*out*/;
            inputs["lastUpdatedTime"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(Fleet.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Fleet resources.
 */
export interface FleetState {
    /**
     * The ARN of the created WorkLink Fleet.
     */
    arn?: pulumi.Input<string>;
    /**
     * The ARN of the Amazon Kinesis data stream that receives the audit events. Kinesis data stream name must begin with `"AmazonWorkLink-"`.
     */
    auditStreamArn?: pulumi.Input<string>;
    /**
     * The identifier used by users to sign in to the Amazon WorkLink app.
     */
    companyCode?: pulumi.Input<string>;
    /**
     * The time that the fleet was created.
     */
    createdTime?: pulumi.Input<string>;
    /**
     * The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.
     */
    deviceCaCertificate?: pulumi.Input<string>;
    /**
     * The name of the fleet.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Provide this to allow manage the identity provider configuration for the fleet. Fields documented below.
     */
    identityProvider?: pulumi.Input<inputs.worklink.FleetIdentityProvider>;
    /**
     * The time that the fleet was last updated.
     */
    lastUpdatedTime?: pulumi.Input<string>;
    /**
     * A region-unique name for the AMI.
     */
    name?: pulumi.Input<string>;
    /**
     * Provide this to allow manage the company network configuration for the fleet. Fields documented below.
     */
    network?: pulumi.Input<inputs.worklink.FleetNetwork>;
    /**
     * The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region. Defaults to `true`.
     */
    optimizeForEndUserLocation?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a Fleet resource.
 */
export interface FleetArgs {
    /**
     * The ARN of the Amazon Kinesis data stream that receives the audit events. Kinesis data stream name must begin with `"AmazonWorkLink-"`.
     */
    auditStreamArn?: pulumi.Input<string>;
    /**
     * The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.
     */
    deviceCaCertificate?: pulumi.Input<string>;
    /**
     * The name of the fleet.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Provide this to allow manage the identity provider configuration for the fleet. Fields documented below.
     */
    identityProvider?: pulumi.Input<inputs.worklink.FleetIdentityProvider>;
    /**
     * A region-unique name for the AMI.
     */
    name?: pulumi.Input<string>;
    /**
     * Provide this to allow manage the company network configuration for the fleet. Fields documented below.
     */
    network?: pulumi.Input<inputs.worklink.FleetNetwork>;
    /**
     * The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region. Defaults to `true`.
     */
    optimizeForEndUserLocation?: pulumi.Input<boolean>;
}
