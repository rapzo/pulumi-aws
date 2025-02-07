// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a FSx Lustre File System. See the [FSx Lustre Guide](https://docs.aws.amazon.com/fsx/latest/LustreGuide/what-is.html) for more information.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.fsx.LustreFileSystem("example", {
 *     importPath: `s3://${aws_s3_bucket.example.bucket}`,
 *     storageCapacity: 1200,
 *     subnetIds: [aws_subnet.example.id],
 * });
 * ```
 *
 * ## Import
 *
 * FSx File Systems can be imported using the `id`, e.g.
 *
 * ```sh
 *  $ pulumi import aws:fsx/lustreFileSystem:LustreFileSystem example fs-543ab12b1ca672f33
 * ```
 *
 *  Certain resource arguments, like `security_group_ids`, do not have a FSx API method for reading the information after creation. If the argument is set in the provider configuration on an imported resource, this provider will always show a difference. To workaround this behavior, either omit the argument from the provider configuration or use [`ignoreChanges`](https://www.pulumi.com/docs/intro/concepts/programming-model/#ignorechanges) to hide the difference, e.g. terraform resource "aws_fsx_lustre_file_system" "example" {
 *
 * # ... other configuration ...
 *
 *  security_group_ids = [aws_security_group.example.id]
 *
 * # There is no FSx API for reading security_group_ids
 *
 *  lifecycle {
 *
 *  ignore_changes = [security_group_ids]
 *
 *  } }
 */
export class LustreFileSystem extends pulumi.CustomResource {
    /**
     * Get an existing LustreFileSystem resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LustreFileSystemState, opts?: pulumi.CustomResourceOptions): LustreFileSystem {
        return new LustreFileSystem(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:fsx/lustreFileSystem:LustreFileSystem';

    /**
     * Returns true if the given object is an instance of LustreFileSystem.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LustreFileSystem {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LustreFileSystem.__pulumiType;
    }

    /**
     * Amazon Resource Name of the file system.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * How Amazon FSx keeps your file and directory listings up to date as you add or modify objects in your linked S3 bucket. see [Auto Import Data Repo](https://docs.aws.amazon.com/fsx/latest/LustreGuide/autoimport-data-repo.html) for more details.
     */
    public readonly autoImportPolicy!: pulumi.Output<string>;
    /**
     * The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 90 days. only valid for `PERSISTENT_1` deployment_type.
     */
    public readonly automaticBackupRetentionDays!: pulumi.Output<number>;
    /**
     * The ID of the source backup to create the filesystem from.
     */
    public readonly backupId!: pulumi.Output<string | undefined>;
    /**
     * A boolean flag indicating whether tags for the file system should be copied to backups. Applicable for `PERSISTENT_1` deployment_type. The default value is false.
     */
    public readonly copyTagsToBackups!: pulumi.Output<boolean | undefined>;
    /**
     * A recurring daily time, in the format HH:MM. HH is the zero-padded hour of the day (0-23), and MM is the zero-padded minute of the hour. For example, 05:00 specifies 5 AM daily. only valid for `PERSISTENT_1` deployment_type. Requires `automaticBackupRetentionDays` to be set.
     */
    public readonly dailyAutomaticBackupStartTime!: pulumi.Output<string>;
    /**
     * Sets the data compression configuration for the file system. Valid values are `LZ4` and `NONE`. Default value is `NONE`. Unsetting this value reverts the compression type back to `NONE`.
     */
    public readonly dataCompressionType!: pulumi.Output<string | undefined>;
    /**
     * - The filesystem deployment type. One of: `SCRATCH_1`, `SCRATCH_2`, `PERSISTENT_1`. `SCRATCH_1` deployment types cannot have `storageCapacity` increased.
     */
    public readonly deploymentType!: pulumi.Output<string | undefined>;
    /**
     * DNS name for the file system, e.g. `fs-12345678.fsx.us-west-2.amazonaws.com`
     */
    public /*out*/ readonly dnsName!: pulumi.Output<string>;
    /**
     * - The type of drive cache used by `PERSISTENT_1` filesystems that are provisioned with `HDD` storage_type. Required for `HDD` storage_type, set to either `READ` or `NONE`.
     */
    public readonly driveCacheType!: pulumi.Output<string | undefined>;
    /**
     * S3 URI (with optional prefix) where the root of your Amazon FSx file system is exported. Can only be specified with `importPath` argument and the path must use the same Amazon S3 bucket as specified in `importPath`. Set equal to `importPath` to overwrite files on export. Defaults to `s3://{IMPORT BUCKET}/FSxLustre{CREATION TIMESTAMP}`.
     */
    public readonly exportPath!: pulumi.Output<string>;
    /**
     * S3 URI (with optional prefix) that you're using as the data repository for your FSx for Lustre file system. For example, `s3://example-bucket/optional-prefix/`.
     */
    public readonly importPath!: pulumi.Output<string | undefined>;
    /**
     * For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. Can only be specified with `importPath` argument. Defaults to `1024`. Minimum of `1` and maximum of `512000`.
     */
    public readonly importedFileChunkSize!: pulumi.Output<number>;
    /**
     * ARN for the KMS Key to encrypt the file system at rest, applicable for `PERSISTENT_1` deployment_type. Defaults to an AWS managed KMS Key.
     */
    public readonly kmsKeyId!: pulumi.Output<string>;
    /**
     * The value to be used when mounting the filesystem.
     */
    public /*out*/ readonly mountName!: pulumi.Output<string>;
    /**
     * Set of Elastic Network Interface identifiers from which the file system is accessible. As explained in the [documentation](https://docs.aws.amazon.com/fsx/latest/LustreGuide/mounting-on-premises.html), the first network interface returned is the primary network interface.
     */
    public /*out*/ readonly networkInterfaceIds!: pulumi.Output<string[]>;
    /**
     * AWS account identifier that created the file system.
     */
    public /*out*/ readonly ownerId!: pulumi.Output<string>;
    /**
     * - Describes the amount of read and write throughput for each 1 tebibyte of storage, in MB/s/TiB, required for the `PERSISTENT_1` deployment_type. Valid values for `SSD` storageType are 50, 100, 200. Valid values for `HDD` storageType are 12, 40.
     */
    public readonly perUnitStorageThroughput!: pulumi.Output<number | undefined>;
    /**
     * A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups will apply to all network interfaces.
     */
    public readonly securityGroupIds!: pulumi.Output<string[] | undefined>;
    /**
     * The storage capacity (GiB) of the file system. Minimum of `1200`. See more details at [Allowed values for Fsx storage capacity](https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileSystem.html#FSx-CreateFileSystem-request-StorageCapacity). Update is allowed only for `SCRATCH_2` and `PERSISTENT_1` deployment types, See more details at [Fsx Storage Capacity Update](https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateFileSystem.html#FSx-UpdateFileSystem-request-StorageCapacity). Required when not creating filesystem for a backup.
     */
    public readonly storageCapacity!: pulumi.Output<number | undefined>;
    /**
     * - The filesystem storage type. Either `SSD` or `HDD`, defaults to `SSD`. `HDD` is only supported on `PERSISTENT_1` deployment types.
     */
    public readonly storageType!: pulumi.Output<string | undefined>;
    /**
     * A list of IDs for the subnets that the file system will be accessible from. File systems currently support only one subnet. The file server is also launched in that subnet's Availability Zone.
     */
    public readonly subnetIds!: pulumi.Output<string>;
    /**
     * A map of tags to assign to the file system. .If configured with a provider `defaultTags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A map of tags assigned to the resource, including those inherited from the provider .
     */
    public /*out*/ readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    /**
     * Identifier of the Virtual Private Cloud for the file system.
     */
    public /*out*/ readonly vpcId!: pulumi.Output<string>;
    /**
     * The preferred start time (in `d:HH:MM` format) to perform weekly maintenance, in the UTC time zone.
     */
    public readonly weeklyMaintenanceStartTime!: pulumi.Output<string>;

    /**
     * Create a LustreFileSystem resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LustreFileSystemArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LustreFileSystemArgs | LustreFileSystemState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LustreFileSystemState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["autoImportPolicy"] = state ? state.autoImportPolicy : undefined;
            inputs["automaticBackupRetentionDays"] = state ? state.automaticBackupRetentionDays : undefined;
            inputs["backupId"] = state ? state.backupId : undefined;
            inputs["copyTagsToBackups"] = state ? state.copyTagsToBackups : undefined;
            inputs["dailyAutomaticBackupStartTime"] = state ? state.dailyAutomaticBackupStartTime : undefined;
            inputs["dataCompressionType"] = state ? state.dataCompressionType : undefined;
            inputs["deploymentType"] = state ? state.deploymentType : undefined;
            inputs["dnsName"] = state ? state.dnsName : undefined;
            inputs["driveCacheType"] = state ? state.driveCacheType : undefined;
            inputs["exportPath"] = state ? state.exportPath : undefined;
            inputs["importPath"] = state ? state.importPath : undefined;
            inputs["importedFileChunkSize"] = state ? state.importedFileChunkSize : undefined;
            inputs["kmsKeyId"] = state ? state.kmsKeyId : undefined;
            inputs["mountName"] = state ? state.mountName : undefined;
            inputs["networkInterfaceIds"] = state ? state.networkInterfaceIds : undefined;
            inputs["ownerId"] = state ? state.ownerId : undefined;
            inputs["perUnitStorageThroughput"] = state ? state.perUnitStorageThroughput : undefined;
            inputs["securityGroupIds"] = state ? state.securityGroupIds : undefined;
            inputs["storageCapacity"] = state ? state.storageCapacity : undefined;
            inputs["storageType"] = state ? state.storageType : undefined;
            inputs["subnetIds"] = state ? state.subnetIds : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["tagsAll"] = state ? state.tagsAll : undefined;
            inputs["vpcId"] = state ? state.vpcId : undefined;
            inputs["weeklyMaintenanceStartTime"] = state ? state.weeklyMaintenanceStartTime : undefined;
        } else {
            const args = argsOrState as LustreFileSystemArgs | undefined;
            if ((!args || args.subnetIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnetIds'");
            }
            inputs["autoImportPolicy"] = args ? args.autoImportPolicy : undefined;
            inputs["automaticBackupRetentionDays"] = args ? args.automaticBackupRetentionDays : undefined;
            inputs["backupId"] = args ? args.backupId : undefined;
            inputs["copyTagsToBackups"] = args ? args.copyTagsToBackups : undefined;
            inputs["dailyAutomaticBackupStartTime"] = args ? args.dailyAutomaticBackupStartTime : undefined;
            inputs["dataCompressionType"] = args ? args.dataCompressionType : undefined;
            inputs["deploymentType"] = args ? args.deploymentType : undefined;
            inputs["driveCacheType"] = args ? args.driveCacheType : undefined;
            inputs["exportPath"] = args ? args.exportPath : undefined;
            inputs["importPath"] = args ? args.importPath : undefined;
            inputs["importedFileChunkSize"] = args ? args.importedFileChunkSize : undefined;
            inputs["kmsKeyId"] = args ? args.kmsKeyId : undefined;
            inputs["perUnitStorageThroughput"] = args ? args.perUnitStorageThroughput : undefined;
            inputs["securityGroupIds"] = args ? args.securityGroupIds : undefined;
            inputs["storageCapacity"] = args ? args.storageCapacity : undefined;
            inputs["storageType"] = args ? args.storageType : undefined;
            inputs["subnetIds"] = args ? args.subnetIds : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["weeklyMaintenanceStartTime"] = args ? args.weeklyMaintenanceStartTime : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["dnsName"] = undefined /*out*/;
            inputs["mountName"] = undefined /*out*/;
            inputs["networkInterfaceIds"] = undefined /*out*/;
            inputs["ownerId"] = undefined /*out*/;
            inputs["tagsAll"] = undefined /*out*/;
            inputs["vpcId"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(LustreFileSystem.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering LustreFileSystem resources.
 */
export interface LustreFileSystemState {
    /**
     * Amazon Resource Name of the file system.
     */
    arn?: pulumi.Input<string>;
    /**
     * How Amazon FSx keeps your file and directory listings up to date as you add or modify objects in your linked S3 bucket. see [Auto Import Data Repo](https://docs.aws.amazon.com/fsx/latest/LustreGuide/autoimport-data-repo.html) for more details.
     */
    autoImportPolicy?: pulumi.Input<string>;
    /**
     * The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 90 days. only valid for `PERSISTENT_1` deployment_type.
     */
    automaticBackupRetentionDays?: pulumi.Input<number>;
    /**
     * The ID of the source backup to create the filesystem from.
     */
    backupId?: pulumi.Input<string>;
    /**
     * A boolean flag indicating whether tags for the file system should be copied to backups. Applicable for `PERSISTENT_1` deployment_type. The default value is false.
     */
    copyTagsToBackups?: pulumi.Input<boolean>;
    /**
     * A recurring daily time, in the format HH:MM. HH is the zero-padded hour of the day (0-23), and MM is the zero-padded minute of the hour. For example, 05:00 specifies 5 AM daily. only valid for `PERSISTENT_1` deployment_type. Requires `automaticBackupRetentionDays` to be set.
     */
    dailyAutomaticBackupStartTime?: pulumi.Input<string>;
    /**
     * Sets the data compression configuration for the file system. Valid values are `LZ4` and `NONE`. Default value is `NONE`. Unsetting this value reverts the compression type back to `NONE`.
     */
    dataCompressionType?: pulumi.Input<string>;
    /**
     * - The filesystem deployment type. One of: `SCRATCH_1`, `SCRATCH_2`, `PERSISTENT_1`. `SCRATCH_1` deployment types cannot have `storageCapacity` increased.
     */
    deploymentType?: pulumi.Input<string>;
    /**
     * DNS name for the file system, e.g. `fs-12345678.fsx.us-west-2.amazonaws.com`
     */
    dnsName?: pulumi.Input<string>;
    /**
     * - The type of drive cache used by `PERSISTENT_1` filesystems that are provisioned with `HDD` storage_type. Required for `HDD` storage_type, set to either `READ` or `NONE`.
     */
    driveCacheType?: pulumi.Input<string>;
    /**
     * S3 URI (with optional prefix) where the root of your Amazon FSx file system is exported. Can only be specified with `importPath` argument and the path must use the same Amazon S3 bucket as specified in `importPath`. Set equal to `importPath` to overwrite files on export. Defaults to `s3://{IMPORT BUCKET}/FSxLustre{CREATION TIMESTAMP}`.
     */
    exportPath?: pulumi.Input<string>;
    /**
     * S3 URI (with optional prefix) that you're using as the data repository for your FSx for Lustre file system. For example, `s3://example-bucket/optional-prefix/`.
     */
    importPath?: pulumi.Input<string>;
    /**
     * For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. Can only be specified with `importPath` argument. Defaults to `1024`. Minimum of `1` and maximum of `512000`.
     */
    importedFileChunkSize?: pulumi.Input<number>;
    /**
     * ARN for the KMS Key to encrypt the file system at rest, applicable for `PERSISTENT_1` deployment_type. Defaults to an AWS managed KMS Key.
     */
    kmsKeyId?: pulumi.Input<string>;
    /**
     * The value to be used when mounting the filesystem.
     */
    mountName?: pulumi.Input<string>;
    /**
     * Set of Elastic Network Interface identifiers from which the file system is accessible. As explained in the [documentation](https://docs.aws.amazon.com/fsx/latest/LustreGuide/mounting-on-premises.html), the first network interface returned is the primary network interface.
     */
    networkInterfaceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * AWS account identifier that created the file system.
     */
    ownerId?: pulumi.Input<string>;
    /**
     * - Describes the amount of read and write throughput for each 1 tebibyte of storage, in MB/s/TiB, required for the `PERSISTENT_1` deployment_type. Valid values for `SSD` storageType are 50, 100, 200. Valid values for `HDD` storageType are 12, 40.
     */
    perUnitStorageThroughput?: pulumi.Input<number>;
    /**
     * A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups will apply to all network interfaces.
     */
    securityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The storage capacity (GiB) of the file system. Minimum of `1200`. See more details at [Allowed values for Fsx storage capacity](https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileSystem.html#FSx-CreateFileSystem-request-StorageCapacity). Update is allowed only for `SCRATCH_2` and `PERSISTENT_1` deployment types, See more details at [Fsx Storage Capacity Update](https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateFileSystem.html#FSx-UpdateFileSystem-request-StorageCapacity). Required when not creating filesystem for a backup.
     */
    storageCapacity?: pulumi.Input<number>;
    /**
     * - The filesystem storage type. Either `SSD` or `HDD`, defaults to `SSD`. `HDD` is only supported on `PERSISTENT_1` deployment types.
     */
    storageType?: pulumi.Input<string>;
    /**
     * A list of IDs for the subnets that the file system will be accessible from. File systems currently support only one subnet. The file server is also launched in that subnet's Availability Zone.
     */
    subnetIds?: pulumi.Input<string>;
    /**
     * A map of tags to assign to the file system. .If configured with a provider `defaultTags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A map of tags assigned to the resource, including those inherited from the provider .
     */
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Identifier of the Virtual Private Cloud for the file system.
     */
    vpcId?: pulumi.Input<string>;
    /**
     * The preferred start time (in `d:HH:MM` format) to perform weekly maintenance, in the UTC time zone.
     */
    weeklyMaintenanceStartTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LustreFileSystem resource.
 */
export interface LustreFileSystemArgs {
    /**
     * How Amazon FSx keeps your file and directory listings up to date as you add or modify objects in your linked S3 bucket. see [Auto Import Data Repo](https://docs.aws.amazon.com/fsx/latest/LustreGuide/autoimport-data-repo.html) for more details.
     */
    autoImportPolicy?: pulumi.Input<string>;
    /**
     * The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 90 days. only valid for `PERSISTENT_1` deployment_type.
     */
    automaticBackupRetentionDays?: pulumi.Input<number>;
    /**
     * The ID of the source backup to create the filesystem from.
     */
    backupId?: pulumi.Input<string>;
    /**
     * A boolean flag indicating whether tags for the file system should be copied to backups. Applicable for `PERSISTENT_1` deployment_type. The default value is false.
     */
    copyTagsToBackups?: pulumi.Input<boolean>;
    /**
     * A recurring daily time, in the format HH:MM. HH is the zero-padded hour of the day (0-23), and MM is the zero-padded minute of the hour. For example, 05:00 specifies 5 AM daily. only valid for `PERSISTENT_1` deployment_type. Requires `automaticBackupRetentionDays` to be set.
     */
    dailyAutomaticBackupStartTime?: pulumi.Input<string>;
    /**
     * Sets the data compression configuration for the file system. Valid values are `LZ4` and `NONE`. Default value is `NONE`. Unsetting this value reverts the compression type back to `NONE`.
     */
    dataCompressionType?: pulumi.Input<string>;
    /**
     * - The filesystem deployment type. One of: `SCRATCH_1`, `SCRATCH_2`, `PERSISTENT_1`. `SCRATCH_1` deployment types cannot have `storageCapacity` increased.
     */
    deploymentType?: pulumi.Input<string>;
    /**
     * - The type of drive cache used by `PERSISTENT_1` filesystems that are provisioned with `HDD` storage_type. Required for `HDD` storage_type, set to either `READ` or `NONE`.
     */
    driveCacheType?: pulumi.Input<string>;
    /**
     * S3 URI (with optional prefix) where the root of your Amazon FSx file system is exported. Can only be specified with `importPath` argument and the path must use the same Amazon S3 bucket as specified in `importPath`. Set equal to `importPath` to overwrite files on export. Defaults to `s3://{IMPORT BUCKET}/FSxLustre{CREATION TIMESTAMP}`.
     */
    exportPath?: pulumi.Input<string>;
    /**
     * S3 URI (with optional prefix) that you're using as the data repository for your FSx for Lustre file system. For example, `s3://example-bucket/optional-prefix/`.
     */
    importPath?: pulumi.Input<string>;
    /**
     * For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. Can only be specified with `importPath` argument. Defaults to `1024`. Minimum of `1` and maximum of `512000`.
     */
    importedFileChunkSize?: pulumi.Input<number>;
    /**
     * ARN for the KMS Key to encrypt the file system at rest, applicable for `PERSISTENT_1` deployment_type. Defaults to an AWS managed KMS Key.
     */
    kmsKeyId?: pulumi.Input<string>;
    /**
     * - Describes the amount of read and write throughput for each 1 tebibyte of storage, in MB/s/TiB, required for the `PERSISTENT_1` deployment_type. Valid values for `SSD` storageType are 50, 100, 200. Valid values for `HDD` storageType are 12, 40.
     */
    perUnitStorageThroughput?: pulumi.Input<number>;
    /**
     * A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups will apply to all network interfaces.
     */
    securityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The storage capacity (GiB) of the file system. Minimum of `1200`. See more details at [Allowed values for Fsx storage capacity](https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileSystem.html#FSx-CreateFileSystem-request-StorageCapacity). Update is allowed only for `SCRATCH_2` and `PERSISTENT_1` deployment types, See more details at [Fsx Storage Capacity Update](https://docs.aws.amazon.com/fsx/latest/APIReference/API_UpdateFileSystem.html#FSx-UpdateFileSystem-request-StorageCapacity). Required when not creating filesystem for a backup.
     */
    storageCapacity?: pulumi.Input<number>;
    /**
     * - The filesystem storage type. Either `SSD` or `HDD`, defaults to `SSD`. `HDD` is only supported on `PERSISTENT_1` deployment types.
     */
    storageType?: pulumi.Input<string>;
    /**
     * A list of IDs for the subnets that the file system will be accessible from. File systems currently support only one subnet. The file server is also launched in that subnet's Availability Zone.
     */
    subnetIds: pulumi.Input<string>;
    /**
     * A map of tags to assign to the file system. .If configured with a provider `defaultTags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The preferred start time (in `d:HH:MM` format) to perform weekly maintenance, in the UTC time zone.
     */
    weeklyMaintenanceStartTime?: pulumi.Input<string>;
}
