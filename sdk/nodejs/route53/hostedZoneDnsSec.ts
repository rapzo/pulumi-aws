// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages Route 53 Hosted Zone Domain Name System Security Extensions (DNSSEC). For more information about managing DNSSEC in Route 53, see the [Route 53 Developer Guide](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec.html).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const exampleKey = new aws.kms.Key("exampleKey", {
 *     customerMasterKeySpec: "ECC_NIST_P256",
 *     deletionWindowInDays: 7,
 *     keyUsage: "SIGN_VERIFY",
 *     policy: JSON.stringify({
 *         Statement: [
 *             {
 *                 Action: [
 *                     "kms:DescribeKey",
 *                     "kms:GetPublicKey",
 *                     "kms:Sign",
 *                 ],
 *                 Effect: "Allow",
 *                 Principal: {
 *                     Service: "dnssec-route53.amazonaws.com",
 *                 },
 *                 Sid: "Allow Route 53 DNSSEC Service",
 *                 Resource: "*",
 *             },
 *             {
 *                 Action: "kms:CreateGrant",
 *                 Effect: "Allow",
 *                 Principal: {
 *                     Service: "dnssec-route53.amazonaws.com",
 *                 },
 *                 Sid: "Allow Route 53 DNSSEC Service to CreateGrant",
 *                 Resource: "*",
 *                 Condition: {
 *                     Bool: {
 *                         "kms:GrantIsForAWSResource": "true",
 *                     },
 *                 },
 *             },
 *             {
 *                 Action: "kms:*",
 *                 Effect: "Allow",
 *                 Principal: {
 *                     AWS: "*",
 *                 },
 *                 Resource: "*",
 *                 Sid: "IAM User Permissions",
 *             },
 *         ],
 *         Version: "2012-10-17",
 *     }),
 * });
 * const exampleZone = new aws.route53.Zone("exampleZone", {});
 * const exampleKeySigningKey = new aws.route53.KeySigningKey("exampleKeySigningKey", {
 *     hostedZoneId: exampleZone.id,
 *     keyManagementServiceArn: exampleKey.arn,
 * });
 * const exampleHostedZoneDnsSec = new aws.route53.HostedZoneDnsSec("exampleHostedZoneDnsSec", {hostedZoneId: exampleKeySigningKey.hostedZoneId}, {
 *     dependsOn: [exampleKeySigningKey],
 * });
 * ```
 *
 * ## Import
 *
 * `aws_route53_hosted_zone_dnssec` resources can be imported by using the Route 53 Hosted Zone identifier, e.g.
 *
 * ```sh
 *  $ pulumi import aws:route53/hostedZoneDnsSec:HostedZoneDnsSec example Z1D633PJN98FT9
 * ```
 */
export class HostedZoneDnsSec extends pulumi.CustomResource {
    /**
     * Get an existing HostedZoneDnsSec resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HostedZoneDnsSecState, opts?: pulumi.CustomResourceOptions): HostedZoneDnsSec {
        return new HostedZoneDnsSec(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:route53/hostedZoneDnsSec:HostedZoneDnsSec';

    /**
     * Returns true if the given object is an instance of HostedZoneDnsSec.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HostedZoneDnsSec {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HostedZoneDnsSec.__pulumiType;
    }

    /**
     * Identifier of the Route 53 Hosted Zone.
     */
    public readonly hostedZoneId!: pulumi.Output<string>;
    /**
     * Hosted Zone signing status. Valid values: `SIGNING`, `NOT_SIGNING`. Defaults to `SIGNING`.
     */
    public readonly signingStatus!: pulumi.Output<string | undefined>;

    /**
     * Create a HostedZoneDnsSec resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HostedZoneDnsSecArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HostedZoneDnsSecArgs | HostedZoneDnsSecState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as HostedZoneDnsSecState | undefined;
            inputs["hostedZoneId"] = state ? state.hostedZoneId : undefined;
            inputs["signingStatus"] = state ? state.signingStatus : undefined;
        } else {
            const args = argsOrState as HostedZoneDnsSecArgs | undefined;
            if ((!args || args.hostedZoneId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostedZoneId'");
            }
            inputs["hostedZoneId"] = args ? args.hostedZoneId : undefined;
            inputs["signingStatus"] = args ? args.signingStatus : undefined;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(HostedZoneDnsSec.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering HostedZoneDnsSec resources.
 */
export interface HostedZoneDnsSecState {
    /**
     * Identifier of the Route 53 Hosted Zone.
     */
    hostedZoneId?: pulumi.Input<string>;
    /**
     * Hosted Zone signing status. Valid values: `SIGNING`, `NOT_SIGNING`. Defaults to `SIGNING`.
     */
    signingStatus?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a HostedZoneDnsSec resource.
 */
export interface HostedZoneDnsSecArgs {
    /**
     * Identifier of the Route 53 Hosted Zone.
     */
    hostedZoneId: pulumi.Input<string>;
    /**
     * Hosted Zone signing status. Valid values: `SIGNING`, `NOT_SIGNING`. Defaults to `SIGNING`.
     */
    signingStatus?: pulumi.Input<string>;
}
