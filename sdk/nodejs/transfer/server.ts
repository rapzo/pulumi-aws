// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../types";
import * as utilities from "../utilities";

/**
 * Provides a AWS Transfer Server resource.
 *
 * > **NOTE on AWS IAM permissions:** If the `endpointType` is set to `VPC`, the `ec2:DescribeVpcEndpoints` and `ec2:ModifyVpcEndpoint` [actions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2.html#amazonec2-actions-as-permissions) are used.
 *
 * ## Example Usage
 * ### Basic
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.transfer.Server("example", {
 *     tags: {
 *         Name: "Example",
 *     },
 * });
 * ```
 * ### Security Policy Name
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.transfer.Server("example", {
 *     securityPolicyName: "TransferSecurityPolicy-2020-06",
 * });
 * ```
 * ### VPC Endpoint
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.transfer.Server("example", {
 *     endpointType: "VPC",
 *     endpointDetails: {
 *         addressAllocationIds: [aws_eip.example.id],
 *         subnetIds: [aws_subnet.example.id],
 *         vpcId: aws_vpc.example.id,
 *     },
 * });
 * ```
 * ### Protocols
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.transfer.Server("example", {
 *     endpointType: "VPC",
 *     endpointDetails: {
 *         subnetIds: [aws_subnet.example.id],
 *         vpcId: aws_vpc.example.id,
 *     },
 *     protocols: [
 *         "FTP",
 *         "FTPS",
 *     ],
 *     certificate: aws_acm_certificate.example.arn,
 *     identityProviderType: "API_GATEWAY",
 *     url: `${aws_api_gateway_deployment.example.invoke_url}${aws_api_gateway_resource.example.path}`,
 * });
 * ```
 *
 * ## Import
 *
 * Transfer Servers can be imported using the `server id`, e.g.
 *
 * ```sh
 *  $ pulumi import aws:transfer/server:Server example s-12345678
 * ```
 *
 *  Certain resource arguments, such as `host_key`, cannot be read via the API and imported into the provider. This provider will display a difference for these arguments the first run after import if declared in the provider configuration for an imported resource.
 */
export class Server extends pulumi.CustomResource {
    /**
     * Get an existing Server resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServerState, opts?: pulumi.CustomResourceOptions): Server {
        return new Server(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:transfer/server:Server';

    /**
     * Returns true if the given object is an instance of Server.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Server {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Server.__pulumiType;
    }

    /**
     * Amazon Resource Name (ARN) of Transfer Server
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * The Amazon Resource Name (ARN) of the AWS Certificate Manager (ACM) certificate. This is required when `protocols` is set to `FTPS`
     */
    public readonly certificate!: pulumi.Output<string | undefined>;
    /**
     * The directory service id of the directory service you want to connect to.
     */
    public readonly directoryId!: pulumi.Output<string | undefined>;
    /**
     * The domain of the storage system that is used for file transfers. Valid values are: `S3` and `EFS`. The default value is `S3`.
     */
    public readonly domain!: pulumi.Output<string | undefined>;
    /**
     * The endpoint of the Transfer Server (e.g. `s-12345678.server.transfer.REGION.amazonaws.com`)
     */
    public /*out*/ readonly endpoint!: pulumi.Output<string>;
    /**
     * The virtual private cloud (VPC) endpoint settings that you want to configure for your SFTP server. Fields documented below.
     */
    public readonly endpointDetails!: pulumi.Output<outputs.transfer.ServerEndpointDetails | undefined>;
    /**
     * The type of endpoint that you want your SFTP server connect to. If you connect to a `VPC` (or `VPC_ENDPOINT`), your SFTP server isn't accessible over the public internet. If you want to connect your SFTP server via public internet, set `PUBLIC`.  Defaults to `PUBLIC`.
     */
    public readonly endpointType!: pulumi.Output<string | undefined>;
    /**
     * A boolean that indicates all users associated with the server should be deleted so that the Server can be destroyed without error. The default value is `false`. This option only applies to servers configured with a `SERVICE_MANAGED` `identityProviderType`.
     */
    public readonly forceDestroy!: pulumi.Output<boolean | undefined>;
    /**
     * RSA private key (e.g. as generated by the `ssh-keygen -N "" -m PEM -f my-new-server-key` command).
     */
    public readonly hostKey!: pulumi.Output<string | undefined>;
    /**
     * This value contains the message-digest algorithm (MD5) hash of the server's host key. This value is equivalent to the output of the `ssh-keygen -l -E md5 -f my-new-server-key` command.
     */
    public /*out*/ readonly hostKeyFingerprint!: pulumi.Output<string>;
    /**
     * The mode of authentication enabled for this service. The default value is `SERVICE_MANAGED`, which allows you to store and access SFTP user credentials within the service. `API_GATEWAY` indicates that user authentication requires a call to an API Gateway endpoint URL provided by you to integrate an identity provider of your choice.
     */
    public readonly identityProviderType!: pulumi.Output<string | undefined>;
    /**
     * Amazon Resource Name (ARN) of the IAM role used to authenticate the user account with an `identityProviderType` of `API_GATEWAY`.
     */
    public readonly invocationRole!: pulumi.Output<string | undefined>;
    /**
     * Amazon Resource Name (ARN) of an IAM role that allows the service to write your SFTP users’ activity to your Amazon CloudWatch logs for monitoring and auditing purposes.
     */
    public readonly loggingRole!: pulumi.Output<string | undefined>;
    /**
     * Specifies the file transfer protocol or protocols over which your file transfer protocol client can connect to your server's endpoint. This defaults to `SFTP` . The available protocols are:
     * * `SFTP`: File transfer over SSH
     * * `FTPS`: File transfer with TLS encryption
     * * `FTP`: Unencrypted file transfer
     */
    public readonly protocols!: pulumi.Output<string[]>;
    /**
     * Specifies the name of the security policy that is attached to the server. Possible values are `TransferSecurityPolicy-2018-11`, `TransferSecurityPolicy-2020-06`, and  `TransferSecurityPolicy-FIPS-2020-06`. Default value is: `TransferSecurityPolicy-2018-11`.
     */
    public readonly securityPolicyName!: pulumi.Output<string | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public /*out*/ readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    /**
     * - URL of the service endpoint used to authenticate users with an `identityProviderType` of `API_GATEWAY`.
     */
    public readonly url!: pulumi.Output<string | undefined>;

    /**
     * Create a Server resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServerArgs | ServerState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServerState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["certificate"] = state ? state.certificate : undefined;
            inputs["directoryId"] = state ? state.directoryId : undefined;
            inputs["domain"] = state ? state.domain : undefined;
            inputs["endpoint"] = state ? state.endpoint : undefined;
            inputs["endpointDetails"] = state ? state.endpointDetails : undefined;
            inputs["endpointType"] = state ? state.endpointType : undefined;
            inputs["forceDestroy"] = state ? state.forceDestroy : undefined;
            inputs["hostKey"] = state ? state.hostKey : undefined;
            inputs["hostKeyFingerprint"] = state ? state.hostKeyFingerprint : undefined;
            inputs["identityProviderType"] = state ? state.identityProviderType : undefined;
            inputs["invocationRole"] = state ? state.invocationRole : undefined;
            inputs["loggingRole"] = state ? state.loggingRole : undefined;
            inputs["protocols"] = state ? state.protocols : undefined;
            inputs["securityPolicyName"] = state ? state.securityPolicyName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["tagsAll"] = state ? state.tagsAll : undefined;
            inputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as ServerArgs | undefined;
            inputs["certificate"] = args ? args.certificate : undefined;
            inputs["directoryId"] = args ? args.directoryId : undefined;
            inputs["domain"] = args ? args.domain : undefined;
            inputs["endpointDetails"] = args ? args.endpointDetails : undefined;
            inputs["endpointType"] = args ? args.endpointType : undefined;
            inputs["forceDestroy"] = args ? args.forceDestroy : undefined;
            inputs["hostKey"] = args ? args.hostKey : undefined;
            inputs["identityProviderType"] = args ? args.identityProviderType : undefined;
            inputs["invocationRole"] = args ? args.invocationRole : undefined;
            inputs["loggingRole"] = args ? args.loggingRole : undefined;
            inputs["protocols"] = args ? args.protocols : undefined;
            inputs["securityPolicyName"] = args ? args.securityPolicyName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["url"] = args ? args.url : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["endpoint"] = undefined /*out*/;
            inputs["hostKeyFingerprint"] = undefined /*out*/;
            inputs["tagsAll"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(Server.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Server resources.
 */
export interface ServerState {
    /**
     * Amazon Resource Name (ARN) of Transfer Server
     */
    arn?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of the AWS Certificate Manager (ACM) certificate. This is required when `protocols` is set to `FTPS`
     */
    certificate?: pulumi.Input<string>;
    /**
     * The directory service id of the directory service you want to connect to.
     */
    directoryId?: pulumi.Input<string>;
    /**
     * The domain of the storage system that is used for file transfers. Valid values are: `S3` and `EFS`. The default value is `S3`.
     */
    domain?: pulumi.Input<string>;
    /**
     * The endpoint of the Transfer Server (e.g. `s-12345678.server.transfer.REGION.amazonaws.com`)
     */
    endpoint?: pulumi.Input<string>;
    /**
     * The virtual private cloud (VPC) endpoint settings that you want to configure for your SFTP server. Fields documented below.
     */
    endpointDetails?: pulumi.Input<inputs.transfer.ServerEndpointDetails>;
    /**
     * The type of endpoint that you want your SFTP server connect to. If you connect to a `VPC` (or `VPC_ENDPOINT`), your SFTP server isn't accessible over the public internet. If you want to connect your SFTP server via public internet, set `PUBLIC`.  Defaults to `PUBLIC`.
     */
    endpointType?: pulumi.Input<string>;
    /**
     * A boolean that indicates all users associated with the server should be deleted so that the Server can be destroyed without error. The default value is `false`. This option only applies to servers configured with a `SERVICE_MANAGED` `identityProviderType`.
     */
    forceDestroy?: pulumi.Input<boolean>;
    /**
     * RSA private key (e.g. as generated by the `ssh-keygen -N "" -m PEM -f my-new-server-key` command).
     */
    hostKey?: pulumi.Input<string>;
    /**
     * This value contains the message-digest algorithm (MD5) hash of the server's host key. This value is equivalent to the output of the `ssh-keygen -l -E md5 -f my-new-server-key` command.
     */
    hostKeyFingerprint?: pulumi.Input<string>;
    /**
     * The mode of authentication enabled for this service. The default value is `SERVICE_MANAGED`, which allows you to store and access SFTP user credentials within the service. `API_GATEWAY` indicates that user authentication requires a call to an API Gateway endpoint URL provided by you to integrate an identity provider of your choice.
     */
    identityProviderType?: pulumi.Input<string>;
    /**
     * Amazon Resource Name (ARN) of the IAM role used to authenticate the user account with an `identityProviderType` of `API_GATEWAY`.
     */
    invocationRole?: pulumi.Input<string>;
    /**
     * Amazon Resource Name (ARN) of an IAM role that allows the service to write your SFTP users’ activity to your Amazon CloudWatch logs for monitoring and auditing purposes.
     */
    loggingRole?: pulumi.Input<string>;
    /**
     * Specifies the file transfer protocol or protocols over which your file transfer protocol client can connect to your server's endpoint. This defaults to `SFTP` . The available protocols are:
     * * `SFTP`: File transfer over SSH
     * * `FTPS`: File transfer with TLS encryption
     * * `FTP`: Unencrypted file transfer
     */
    protocols?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the name of the security policy that is attached to the server. Possible values are `TransferSecurityPolicy-2018-11`, `TransferSecurityPolicy-2020-06`, and  `TransferSecurityPolicy-FIPS-2020-06`. Default value is: `TransferSecurityPolicy-2018-11`.
     */
    securityPolicyName?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * - URL of the service endpoint used to authenticate users with an `identityProviderType` of `API_GATEWAY`.
     */
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Server resource.
 */
export interface ServerArgs {
    /**
     * The Amazon Resource Name (ARN) of the AWS Certificate Manager (ACM) certificate. This is required when `protocols` is set to `FTPS`
     */
    certificate?: pulumi.Input<string>;
    /**
     * The directory service id of the directory service you want to connect to.
     */
    directoryId?: pulumi.Input<string>;
    /**
     * The domain of the storage system that is used for file transfers. Valid values are: `S3` and `EFS`. The default value is `S3`.
     */
    domain?: pulumi.Input<string>;
    /**
     * The virtual private cloud (VPC) endpoint settings that you want to configure for your SFTP server. Fields documented below.
     */
    endpointDetails?: pulumi.Input<inputs.transfer.ServerEndpointDetails>;
    /**
     * The type of endpoint that you want your SFTP server connect to. If you connect to a `VPC` (or `VPC_ENDPOINT`), your SFTP server isn't accessible over the public internet. If you want to connect your SFTP server via public internet, set `PUBLIC`.  Defaults to `PUBLIC`.
     */
    endpointType?: pulumi.Input<string>;
    /**
     * A boolean that indicates all users associated with the server should be deleted so that the Server can be destroyed without error. The default value is `false`. This option only applies to servers configured with a `SERVICE_MANAGED` `identityProviderType`.
     */
    forceDestroy?: pulumi.Input<boolean>;
    /**
     * RSA private key (e.g. as generated by the `ssh-keygen -N "" -m PEM -f my-new-server-key` command).
     */
    hostKey?: pulumi.Input<string>;
    /**
     * The mode of authentication enabled for this service. The default value is `SERVICE_MANAGED`, which allows you to store and access SFTP user credentials within the service. `API_GATEWAY` indicates that user authentication requires a call to an API Gateway endpoint URL provided by you to integrate an identity provider of your choice.
     */
    identityProviderType?: pulumi.Input<string>;
    /**
     * Amazon Resource Name (ARN) of the IAM role used to authenticate the user account with an `identityProviderType` of `API_GATEWAY`.
     */
    invocationRole?: pulumi.Input<string>;
    /**
     * Amazon Resource Name (ARN) of an IAM role that allows the service to write your SFTP users’ activity to your Amazon CloudWatch logs for monitoring and auditing purposes.
     */
    loggingRole?: pulumi.Input<string>;
    /**
     * Specifies the file transfer protocol or protocols over which your file transfer protocol client can connect to your server's endpoint. This defaults to `SFTP` . The available protocols are:
     * * `SFTP`: File transfer over SSH
     * * `FTPS`: File transfer with TLS encryption
     * * `FTP`: Unencrypted file transfer
     */
    protocols?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the name of the security policy that is attached to the server. Possible values are `TransferSecurityPolicy-2018-11`, `TransferSecurityPolicy-2020-06`, and  `TransferSecurityPolicy-FIPS-2020-06`. Default value is: `TransferSecurityPolicy-2018-11`.
     */
    securityPolicyName?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * - URL of the service endpoint used to authenticate users with an `identityProviderType` of `API_GATEWAY`.
     */
    url?: pulumi.Input<string>;
}
